(function () {
  const AppUtils = window.AppUtils;
  const AppState = window.AppState;

  function render(container) {
    let settings = AppState.getSettings();
    let contacts = AppState.getContacts();

    function contactsHtml() {
      if (contacts.length === 0) return '<p class="muted">No contacts added yet.</p>';
      return contacts
        .map(function (c) {
          return (
            '<div class="contact-row">' +
            '<div class="contact-info"><strong>' + AppUtils.escapeHtml(c.name) + "</strong> " +
            '<span class="muted">' + AppUtils.escapeHtml(c.relation || "") + " &middot; " + AppUtils.escapeHtml(c.phone) + "</span></div>" +
            '<button class="btn btn-secondary remove-contact-btn" data-id="' + c.id + '">Remove</button>' +
            "</div>"
          );
        })
        .join("");
    }

    function draw() {
      container.innerHTML =
        '<section class="view-section">' +
        "<h1>⚙️ Settings</h1>" +
        '<p class="privacy-note">\u{1F512} All data below stays in this browser (localStorage). Nothing is sent to a server.</p>' +
        "<h2>Emergency Number</h2>" +
        '<p class="muted">This varies by country (e.g. 911, 112, 999, 000, 100) — set the correct one for your location.</p>' +
        '<form id="emergency-number-form" class="inline-form">' +
        '<input type="text" id="emergency-number-input" value="' + AppUtils.escapeHtml(settings.emergencyNumber) + '">' +
        '<button type="submit" class="btn btn-primary">Save</button>' +
        "</form>" +
        "<h2>Emergency Contacts</h2>" +
        '<div id="contacts-list">' + contactsHtml() + "</div>" +
        "<h3>Add a Contact</h3>" +
        '<form id="add-contact-form" class="stacked-form">' +
        '<input type="text" id="contact-name" placeholder="Name" required>' +
        '<input type="text" id="contact-relation" placeholder="Relation (e.g. Parent, Friend)">' +
        '<input type="tel" id="contact-phone" placeholder="Phone number" required>' +
        '<button type="submit" class="btn btn-primary">Add Contact</button>' +
        "</form>" +
        "</section>";

      document.getElementById("emergency-number-form").addEventListener("submit", function (e) {
        e.preventDefault();
        settings = Object.assign({}, settings, {
          emergencyNumber: document.getElementById("emergency-number-input").value.trim() || window.APP_CONFIG.defaultEmergencyNumber
        });
        AppState.saveSettings(settings);
        draw();
      });

      document.getElementById("add-contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("contact-name").value.trim();
        const phone = document.getElementById("contact-phone").value.trim();
        const relation = document.getElementById("contact-relation").value.trim();
        if (!name || !phone) return;
        contacts = AppState.addContact({ id: AppUtils.uuid(), name, phone, relation });
        draw();
      });

      AppUtils.qsa(".remove-contact-btn", container).forEach(function (btn) {
        btn.addEventListener("click", function () {
          contacts = AppState.removeContact(btn.dataset.id);
          draw();
        });
      });
    }

    draw();
  }

  window.AppViews = window.AppViews || {};
  window.AppViews.settings = { render: render };
})();
