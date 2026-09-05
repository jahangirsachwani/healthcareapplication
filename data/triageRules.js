window.APP_DATA = window.APP_DATA || {};

// Simple, transparent rule-based scoring — not a medical or ML model.
// Any selected redFlag symptom forces the "Emergency" tier regardless of score.
window.APP_DATA.symptoms = [
  { id: "chest_pain", label: "Chest pain or pressure", redFlag: true, weight: 5 },
  { id: "difficulty_breathing", label: "Difficulty breathing / shortness of breath", redFlag: true, weight: 5 },
  { id: "severe_bleeding", label: "Severe or uncontrolled bleeding", redFlag: true, weight: 5 },
  { id: "unconscious", label: "Loss of consciousness / unresponsive", redFlag: true, weight: 5 },
  { id: "stroke_signs", label: "Sudden weakness/numbness, slurred speech, or facial drooping", redFlag: true, weight: 5 },
  { id: "severe_allergic", label: "Severe allergic reaction (swelling, trouble breathing)", redFlag: true, weight: 5 },
  { id: "high_fever", label: "High fever (over 103°F / 39.4°C)", redFlag: false, weight: 2 },
  { id: "persistent_vomiting", label: "Persistent vomiting or diarrhea", redFlag: false, weight: 2 },
  { id: "moderate_pain", label: "Moderate pain not relieved by rest", redFlag: false, weight: 1.5 },
  { id: "dizziness", label: "Dizziness or lightheadedness", redFlag: false, weight: 1.5 },
  { id: "minor_cut", label: "Minor cut or scrape", redFlag: false, weight: 0.5 },
  { id: "mild_headache", label: "Mild headache", redFlag: false, weight: 0.5 },
  { id: "cold_symptoms", label: "Cold or flu-like symptoms", redFlag: false, weight: 0.5 }
];

window.APP_DATA.triageThresholds = {
  urgent: 4,
  doctor: 1.5
};
