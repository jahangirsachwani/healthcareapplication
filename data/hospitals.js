window.APP_DATA = window.APP_DATA || {};

// Mock dataset scattered around the demo fallback location (40.7128, -74.0060).
window.APP_DATA.hospitals = [
  { id: "h1", name: "City General Hospital", type: "hospital", lat: 40.7328, lng: -73.9860, address: "123 Main St, New York, NY", phone: "+12125551000", hasER: true, hours: "24/7" },
  { id: "h2", name: "Riverside Medical Center", type: "hospital", lat: 40.6988, lng: -74.0210, address: "45 Riverside Ave, New York, NY", phone: "+12125551010", hasER: true, hours: "24/7" },
  { id: "h3", name: "St. Mary's Hospital", type: "hospital", lat: 40.7450, lng: -74.0300, address: "780 Park Blvd, New York, NY", phone: "+12125551020", hasER: true, hours: "24/7" },
  { id: "c1", name: "Downtown Urgent Care Clinic", type: "clinic", lat: 40.7150, lng: -74.0080, address: "12 Elm St, New York, NY", phone: "+12125552000", hasER: false, hours: "8am - 10pm" },
  { id: "c2", name: "Family Health Clinic", type: "clinic", lat: 40.7075, lng: -73.9950, address: "300 Grove St, New York, NY", phone: "+12125552010", hasER: false, hours: "9am - 6pm" },
  { id: "c3", name: "Northside Walk-in Clinic", type: "clinic", lat: 40.7260, lng: -74.0150, address: "88 North Ave, New York, NY", phone: "+12125552020", hasER: false, hours: "7am - 9pm" },
  { id: "a1", name: "Metro Ambulance Service", type: "ambulance", lat: 40.7180, lng: -74.0000, address: "Dispatch Station 4, New York, NY", phone: "+12125553000", hasER: false, hours: "24/7" },
  { id: "a2", name: "Rapid Response Ambulance", type: "ambulance", lat: 40.7020, lng: -74.0100, address: "Dispatch Station 9, New York, NY", phone: "+12125553010", hasER: false, hours: "24/7" },
  { id: "h4", name: "Eastview Children's Hospital", type: "hospital", lat: 40.7390, lng: -73.9780, address: "500 East Rd, New York, NY", phone: "+12125551030", hasER: true, hours: "24/7" },
  { id: "c4", name: "Community Health Center", type: "clinic", lat: 40.6950, lng: -73.9900, address: "222 South St, New York, NY", phone: "+12125552030", hasER: false, hours: "8am - 8pm" }
];
