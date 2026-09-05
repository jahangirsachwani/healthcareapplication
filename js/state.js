window.AppState = (function () {
  const KEYS = window.APP_CONFIG.storageKeys;

  function getContacts() {
    try {
      return JSON.parse(localStorage.getItem(KEYS.contacts)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveContacts(contacts) {
    localStorage.setItem(KEYS.contacts, JSON.stringify(contacts));
  }

  function addContact(contact) {
    const contacts = getContacts();
    contacts.push(contact);
    saveContacts(contacts);
    return contacts;
  }

  function removeContact(id) {
    const contacts = getContacts().filter((c) => c.id !== id);
    saveContacts(contacts);
    return contacts;
  }

  function defaultSettings() {
    return {
      userName: "",
      emergencyNumber: window.APP_CONFIG.defaultEmergencyNumber,
      theme: "system"
    };
  }

  function getSettings() {
    try {
      const stored = JSON.parse(localStorage.getItem(KEYS.settings));
      return Object.assign(defaultSettings(), stored || {});
    } catch (e) {
      return defaultSettings();
    }
  }

  function saveSettings(settings) {
    localStorage.setItem(KEYS.settings, JSON.stringify(settings));
  }

  // Deliberately in-memory only: a stale cached fix from a previous session
  // should never be reused for a real emergency.
  let lastLocation = null;
  function getLastLocation() {
    return lastLocation;
  }
  function setLastLocation(loc) {
    lastLocation = loc;
  }

  return {
    getContacts,
    saveContacts,
    addContact,
    removeContact,
    getSettings,
    saveSettings,
    getLastLocation,
    setLastLocation
  };
})();
