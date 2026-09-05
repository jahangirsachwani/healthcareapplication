window.APP_CONFIG = {
  appName: "Emergency Assist",
  defaultEmergencyNumber: "911",
  // Used when geolocation is denied/unavailable, so the hospital finder and SOS flow still work.
  fallbackLocation: { lat: 40.7128, lng: -74.0060, label: "Demo location (New York, NY)" },
  storageKeys: {
    contacts: "ea_contacts_v1",
    settings: "ea_settings_v1"
  }
};
