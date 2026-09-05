window.AppUtils = (function () {
  function toRad(deg) {
    return (deg * Math.PI) / 180;
  }

  function haversineKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  function formatDistance(km) {
    if (km < 1) return Math.round(km * 1000) + " m";
    return km.toFixed(1) + " km";
  }

  function escapeHtml(str) {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return String(str).replace(/[&<>"']/g, (ch) => map[ch]);
  }

  function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function qsa(sel, root) {
    return Array.from((root || document).querySelectorAll(sel));
  }

  function buildGoogleMapsLink(lat, lng) {
    return "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lng;
  }

  function buildTelLink(phone) {
    return "tel:" + String(phone).replace(/\s+/g, "");
  }

  function buildSmsLink(phone, body) {
    return "sms:" + String(phone).replace(/\s+/g, "") + "?body=" + encodeURIComponent(body);
  }

  return {
    haversineKm,
    formatDistance,
    escapeHtml,
    uuid,
    qs,
    qsa,
    buildGoogleMapsLink,
    buildTelLink,
    buildSmsLink
  };
})();
