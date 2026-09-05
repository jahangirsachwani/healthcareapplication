# Emergency Assist (Demo)

A web-based prototype for helping people during a medical emergency. Built with plain HTML/CSS/JavaScript — no framework, no build step, no backend.

## Features
- **SOS Alert** — captures your location, builds a message with a Google Maps link, and hands off to your phone's real call/SMS apps via `tel:`/`sms:` links.
- **Nearby Hospital/Ambulance Finder** — map (Leaflet + OpenStreetMap) of a mock dataset of hospitals, clinics, and ambulance services, sorted by distance.
- **First Aid Guide** — step-by-step instructions for common emergencies (choking, CPR, bleeding, burns, and more).
- **Symptom Check** — a simple, transparent rule-based checklist that suggests how urgently to seek care.

## Running it
Either:
- Double-click `index.html` to open it directly in a browser, or
- Serve it with any static file server, e.g. `python -m http.server` from this folder, then visit `http://localhost:8000`.

No install step, no dependencies to fetch beyond the Leaflet map library (loaded from a CDN).

## Important limitations
- **This is a demo, not a real emergency service.** If you have a real emergency, call your local emergency number immediately.
- Hospital/ambulance data is fictional/mock data, not real facilities.
- The symptom check is a simple rule-based scoring system, not a medical diagnosis tool.
- `tel:`/`sms:` links in the SOS flow are real — test with your own phone number first.

## Privacy
All data (emergency contacts, settings) is stored only in your browser's `localStorage`. There is no server and nothing is transmitted anywhere by this app itself.
