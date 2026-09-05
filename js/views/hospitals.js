(function () {
  const AppUtils = window.AppUtils;

  function render(container) {
    const hospitals = window.APP_DATA.hospitals;

    container.innerHTML =
      '<section class="view-section hospitals-view">' +
      "<h1>\u{1F3E5} Nearby Hospitals & Ambulance Services</h1>" +
      '<div class="filter-bar">' +
      '<label><input type="checkbox" id="filter-er"> 24/7 ER only</label>' +
      "<label>Type: " +
      '<select id="filter-type">' +
      '<option value="">All</option>' +
      '<option value="hospital">Hospitals</option>' +
      '<option value="clinic">Clinics</option>' +
      '<option value="ambulance">Ambulance</option>' +
      "</select>" +
      "</label>" +
      "</div>" +
      '<div id="location-notice" class="status-box"></div>' +
      '<div id="map" class="map-container"></div>' +
      '<div id="hospital-list" class="hospital-list"></div>' +
      "</section>";

    let map;
    let markers = [];
    let userLocation = null;

    function initMap(center) {
      map = L.map("map").setView([center.lat, center.lng], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 19
      }).addTo(map);
      L.marker([center.lat, center.lng]).addTo(map).bindPopup("You are here").openPopup();
      setTimeout(function () {
        map.invalidateSize();
      }, 100);
    }

    function computeAndRender() {
      const filterEr = document.getElementById("filter-er").checked;
      const filterType = document.getElementById("filter-type").value;

      const results = hospitals
        .filter((h) => !filterEr || h.hasER)
        .filter((h) => !filterType || h.type === filterType)
        .map((h) =>
          Object.assign({}, h, {
            distanceKm: AppUtils.haversineKm(userLocation.lat, userLocation.lng, h.lat, h.lng)
          })
        )
        .sort((a, b) => a.distanceKm - b.distanceKm);

      markers.forEach((m) => map.removeLayer(m));
      markers = [];

      const listEl = document.getElementById("hospital-list");
      listEl.innerHTML =
        results
          .map(function (h, idx) {
            return (
              '<div class="hospital-card" data-idx="' + idx + '">' +
              "<h3>" + AppUtils.escapeHtml(h.name) + ' <span class="badge">' + h.type + "</span></h3>" +
              "<p>" + AppUtils.escapeHtml(h.address) + " &middot; " + AppUtils.formatDistance(h.distanceKm) + "</p>" +
              '<p class="muted">' + (h.hasER ? "24/7 ER" : "No ER") + " &middot; " + AppUtils.escapeHtml(h.hours) + "</p>" +
              '<div class="hospital-actions">' +
              '<a class="btn btn-secondary" href="' + AppUtils.buildTelLink(h.phone) + '">\u{1F4DE} Call</a> ' +
              '<a class="btn btn-secondary" target="_blank" rel="noopener" href="' + AppUtils.buildGoogleMapsLink(h.lat, h.lng) + '">\u{1F9ED} Directions</a>' +
              "</div></div>"
            );
          })
          .join("") || '<p class="muted">No results match your filters.</p>';

      results.forEach(function (h) {
        const marker = L.marker([h.lat, h.lng])
          .addTo(map)
          .bindPopup(
            "<strong>" + AppUtils.escapeHtml(h.name) + "</strong><br>" +
              AppUtils.escapeHtml(h.address) + "<br>" +
              AppUtils.formatDistance(h.distanceKm)
          );
        markers.push(marker);
      });

      AppUtils.qsa(".hospital-card", listEl).forEach(function (card) {
        card.addEventListener("click", function () {
          const idx = Number(card.dataset.idx);
          const marker = markers[idx];
          if (marker) {
            map.setView(marker.getLatLng(), 15);
            marker.openPopup();
          }
        });
      });
    }

    function start(loc, notice) {
      userLocation = loc;
      initMap(loc);
      if (notice) document.getElementById("location-notice").textContent = notice;
      computeAndRender();
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          start({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        },
        function () {
          const fb = window.APP_CONFIG.fallbackLocation;
          start(fb, "Using a default location (location access denied or unavailable): " + fb.label);
        },
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
      );
    } else {
      const fb = window.APP_CONFIG.fallbackLocation;
      start(fb, "Geolocation not supported. Using default location: " + fb.label);
    }

    document.getElementById("filter-er").addEventListener("change", computeAndRender);
    document.getElementById("filter-type").addEventListener("change", computeAndRender);
  }

  window.AppViews = window.AppViews || {};
  window.AppViews.hospitals = { render: render };
})();
