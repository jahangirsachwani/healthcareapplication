(function () {
  function render(container) {
    container.innerHTML =
      '<section class="view-section">' +
      "<h1>Emergency Assist</h1>" +
      "<p>Quick access to emergency tools. In a real emergency, call your local emergency number immediately.</p>" +
      '<div class="card-grid">' +
      '<a class="feature-card sos-card" href="#/sos"><span class="icon">\u{1F198}</span><h2>SOS Alert</h2><p>Share your location and alert your emergency contacts.</p></a>' +
      '<a class="feature-card" href="#/hospitals"><span class="icon">\u{1F3E5}</span><h2>Find Care Nearby</h2><p>Locate nearby hospitals, clinics, and ambulance services.</p></a>' +
      '<a class="feature-card" href="#/firstaid"><span class="icon">\u{1FA79}</span><h2>First Aid Guide</h2><p>Step-by-step instructions for common emergencies.</p></a>' +
      '<a class="feature-card" href="#/triage"><span class="icon">\u{1FA7A}</span><h2>Symptom Check</h2><p>Get guidance on how urgently you should seek care.</p></a>' +
      "</div>" +
      "</section>";
  }

  window.AppViews = window.AppViews || {};
  window.AppViews.home = { render: render };
})();
