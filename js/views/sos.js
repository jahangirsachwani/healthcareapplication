(function () {
  const AppUtils = window.AppUtils;

  function contactRowHtml(c) {
    return (
      '<div class="contact-row">' +
      '<div class="contact-info"><strong>' + AppUtils.escapeHtml(c.name) + "</strong> " +
      '<span class="muted">' + AppUtils.escapeHtml(c.relation || "") + "</span></div>" +
      '<div class="contact-actions">' +
      '<a class="btn btn-secondary" href="' + AppUtils.buildTelLink(c.phone) + '">\u{1F4DE} Call</a> ' +
      '<a class="btn btn-secondary btn-sos-sms" data-contact-id="' + c.id + '" href="#">✉️ Send SOS SMS</a>' +
      "</div></div>"
    );
  }

  function render(container) {
    const settings = window.AppState.getSettings();
    const contacts = window.AppState.getContacts();
    let currentLocation = null;

    container.innerHTML =
      '<section class="view-section sos-view">' +
      "<h1>\u{1F198} SOS</h1>" +
      '<p class="warning-note">This uses real tel:/sms: links on your device. Test with your own number before relying on it in an emergency.</p>' +
      '<button id="get-location-btn" class="btn btn-primary btn-large">Share My Location</button>' +
      '<div id="location-status" class="status-box" aria-live="polite">Location not shared yet.</div>' +
      '<div class="form-group">' +
      '<label for="sos-note">Optional note (e.g. "I\'m at the park, twisted my ankle")</label>' +
      '<textarea id="sos-note" rows="2"></textarea>' +
      "</div>" +
      '<a id="call-emergency-btn" class="btn btn-danger btn-large" href="' + AppUtils.buildTelLink(settings.emergencyNumber) + '">\u{1F4DE} Call Emergency Number (' + AppUtils.escapeHtml(settings.emergencyNumber) + ")</a>" +
      "<h2>Your Emergency Contacts</h2>" +
      '<div id="contacts-list">' +
      (contacts.length
        ? contacts.map(contactRowHtml).join("")
        : '<p class="muted">No contacts yet. <a href="#/settings">Add one in Settings</a>.</p>') +
      "</div>" +
      "</section>";

    const statusBox = document.getElementById("location-status");

    document.getElementById("get-location-btn").addEventListener("click", function () {
      statusBox.textContent = "Getting your location…";
      if (!navigator.geolocation) {
        statusBox.textContent =
          "Geolocation is not supported on this device/browser. You can still call or message contacts manually.";
        return;
      }
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          currentLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          window.AppState.setLastLocation(currentLocation);
          const link = AppUtils.buildGoogleMapsLink(currentLocation.lat, currentLocation.lng);
          statusBox.innerHTML = 'Location found: <a href="' + link + '" target="_blank" rel="noopener">' + link + "</a>";
        },
        function (err) {
          let msg;
          switch (err.code) {
            case err.PERMISSION_DENIED:
              msg = "Location permission denied. Enable location access in your browser settings, or describe your location in the note field.";
              break;
            case err.POSITION_UNAVAILABLE:
              msg = "Location unavailable right now. Try again, or describe your location in the note field.";
              break;
            case err.TIMEOUT:
              msg = "Getting your location timed out. Try again.";
              break;
            default:
              msg = "Could not get your location.";
          }
          currentLocation = null;
          statusBox.textContent = msg;
        },
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
      );
    });

    function buildMessage() {
      const note = document.getElementById("sos-note").value.trim();
      let msg = "EMERGENCY: I need help.";
      if (currentLocation) {
        msg += " My location: " + AppUtils.buildGoogleMapsLink(currentLocation.lat, currentLocation.lng) + ".";
      } else {
        msg += " (Location unavailable" + (note ? " — see note" : "") + ".)";
      }
      if (note) msg += " Note: " + note;
      msg += " Sent via " + window.APP_CONFIG.appName + " at " + new Date().toLocaleString() + ".";
      return msg;
    }

    AppUtils.qsa(".btn-sos-sms", container).forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const contact = contacts.find((c) => c.id === btn.dataset.contactId);
        if (!contact) return;
        window.location.href = AppUtils.buildSmsLink(contact.phone, buildMessage());
      });
    });
  }

  window.AppViews = window.AppViews || {};
  window.AppViews.sos = { render: render };
})();
