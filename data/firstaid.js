window.APP_DATA = window.APP_DATA || {};

window.APP_DATA.firstaid = [
  {
    id: "choking",
    title: "Choking",
    icon: "\u{1FAC1}",
    summary: "What to do if someone can't breathe, cough, or speak.",
    steps: [
      "Ask \"Are you choking?\" If they can cough or speak, encourage them to keep coughing.",
      "If they cannot breathe, cough, or speak: stand behind them and lean them slightly forward.",
      "Give up to 5 sharp back blows between the shoulder blades with the heel of your hand.",
      "If that doesn't clear it, give up to 5 abdominal thrusts (Heimlich maneuver): fist above the navel, grasp with other hand, pull sharply inward and upward.",
      "Alternate 5 back blows and 5 abdominal thrusts until the object is dislodged or the person becomes unresponsive.",
      "If they become unresponsive, lower them to the ground and begin CPR, checking the mouth for the object before each set of breaths."
    ],
    whenToCallEmergency: "Immediately, if the person cannot breathe/cough/speak, or becomes unresponsive."
  },
  {
    id: "cpr",
    title: "CPR (Cardiopulmonary Resuscitation)",
    icon: "\u{1FAC0}",
    summary: "For someone unresponsive and not breathing normally.",
    steps: [
      "Check responsiveness: tap shoulders and shout. Check for normal breathing (no more than 10 seconds).",
      "Call your local emergency number (or have someone else call) before starting CPR.",
      "Place the person on their back on a firm surface.",
      "Place the heel of one hand on the center of the chest, other hand on top, fingers interlaced.",
      "Push hard and fast: at least 2 inches (5 cm) deep, at a rate of 100-120 compressions per minute.",
      "Allow the chest to fully recoil between compressions.",
      "If trained, give 2 rescue breaths after every 30 compressions. If untrained, continue compressions only.",
      "Continue until emergency help arrives, an AED is available, or the person starts breathing normally."
    ],
    whenToCallEmergency: "Immediately, before starting CPR, for any unresponsive person not breathing normally."
  },
  {
    id: "bleeding",
    title: "Severe Bleeding",
    icon: "\u{1FA79}",
    summary: "Controlling heavy or uncontrolled bleeding.",
    steps: [
      "If possible, wear gloves or use a barrier to protect yourself from contact with blood.",
      "Apply firm, direct pressure to the wound with a clean cloth or bandage.",
      "Do not remove the cloth if it soaks through — add more layers on top and keep pressing.",
      "If the wound is on a limb and bleeding is severe, raise the limb above heart level if possible.",
      "If bleeding doesn't stop and it's a limb injury, consider a tourniquet only if trained to use one, placed a few inches above the wound.",
      "Keep the person still and warm, and monitor for signs of shock (pale skin, rapid breathing, confusion)."
    ],
    whenToCallEmergency: "Immediately, for any bleeding that won't stop with direct pressure, spurting blood, or signs of shock."
  },
  {
    id: "burns",
    title: "Burns",
    icon: "\u{1F525}",
    summary: "First response for thermal, chemical, or electrical burns.",
    steps: [
      "Stop the burning process: move away from the heat source, remove smoldering clothing/jewelry near the area.",
      "Cool the burn under cool (not ice-cold) running water for 10-20 minutes.",
      "Do not apply ice, butter, oils, or ointments to the burn.",
      "Cover loosely with a clean, non-fluffy cloth or cling film — do not wrap tightly.",
      "Do not burst any blisters.",
      "For chemical burns, brush off dry chemical first, then flush with water; for electrical burns, ensure the power source is off before touching the person."
    ],
    whenToCallEmergency: "Immediately, for burns larger than the person's palm, burns on the face/hands/genitals, deep burns, or electrical/chemical burns."
  },
  {
    id: "fainting",
    title: "Fainting",
    icon: "\u{1F4AB}",
    summary: "Someone feels lightheaded or briefly loses consciousness.",
    steps: [
      "If someone feels faint, help them lie down and raise their legs about 12 inches, or sit and lower their head between their knees.",
      "Loosen tight clothing around the neck.",
      "Ensure fresh air and avoid crowding around the person.",
      "If they faint, check breathing and responsiveness once they're on the ground.",
      "Once they come round, keep them lying down for a few minutes before slowly sitting up."
    ],
    whenToCallEmergency: "If the person doesn't regain consciousness within a minute, is injured from a fall, has chest pain, or faints repeatedly."
  },
  {
    id: "seizure",
    title: "Seizure",
    icon: "⚡",
    summary: "Supporting someone during and after a seizure.",
    steps: [
      "Stay calm, stay with the person, and time the seizure.",
      "Clear the area of anything hard or sharp they could hit.",
      "Cushion their head with something soft.",
      "Do NOT hold them down and do NOT put anything in their mouth.",
      "Once the jerking stops, gently roll them onto their side (recovery position) and check breathing.",
      "Stay with them until they are fully alert; they may be confused for a while afterward."
    ],
    whenToCallEmergency: "If the seizure lasts longer than 5 minutes, another seizure follows immediately, the person is injured, pregnant, or has never had a seizure before."
  },
  {
    id: "allergic-reaction",
    title: "Severe Allergic Reaction (Anaphylaxis)",
    icon: "\u{1F41D}",
    summary: "Sudden, severe reaction to food, insect stings, or medication.",
    steps: [
      "Look for signs: swelling of face/throat, difficulty breathing, hives, rapid pulse, dizziness.",
      "If the person has an epinephrine auto-injector (e.g. EpiPen), help them use it right away, in the outer thigh.",
      "Have them lie flat with legs raised (unless breathing is difficult, then let them sit up) to help with circulation.",
      "A second dose of epinephrine can be given after 5-15 minutes if symptoms don't improve and more is available.",
      "Monitor breathing and responsiveness continuously until help arrives."
    ],
    whenToCallEmergency: "Immediately, for any signs of a severe allergic reaction, even if an epinephrine auto-injector was used."
  },
  {
    id: "fracture-sprain",
    title: "Fracture or Sprain",
    icon: "\u{1F9B4}",
    summary: "Suspected broken bone, sprain, or strain.",
    steps: [
      "Keep the injured area still and support it in the position found — don't try to straighten it.",
      "Apply an ice pack wrapped in cloth to reduce swelling (never directly on skin).",
      "Immobilize the area with a splint or sling if you're trained and it's safe to do so.",
      "Elevate the injured limb if possible to reduce swelling.",
      "Do not let the person eat or drink in case surgery is needed."
    ],
    whenToCallEmergency: "If there's an open wound with bone visible, the limb looks deformed, there's numbness/loss of circulation, or it's a suspected spine/neck/head injury."
  },
  {
    id: "poisoning",
    title: "Poisoning",
    icon: "☠️",
    summary: "Suspected swallowing, inhalation, or skin exposure to a poison.",
    steps: [
      "Try to identify what was taken/touched and how much, and keep any packaging or container.",
      "Do NOT induce vomiting unless specifically instructed by emergency services or poison control.",
      "For skin/eye exposure, remove contaminated clothing and rinse the area with plenty of water.",
      "For inhaled poison, move the person to fresh air immediately.",
      "Keep the person calm and monitor breathing and responsiveness while waiting for help."
    ],
    whenToCallEmergency: "Immediately, for any suspected poisoning — call your local emergency number or poison control right away."
  },
  {
    id: "heat-stroke",
    title: "Heat Stroke",
    icon: "\u{1F321}️",
    summary: "Dangerous overheating of the body.",
    steps: [
      "Move the person to a cool, shaded place immediately.",
      "Remove excess clothing and cool them with wet cloths, fans, or a cool (not ice) bath if possible.",
      "Offer sips of cool water only if they are fully alert and able to swallow.",
      "Watch for confusion, very high body temperature, rapid pulse, or loss of consciousness.",
      "Continue cooling efforts until their temperature drops and help arrives."
    ],
    whenToCallEmergency: "Immediately, if the person is confused, unconscious, has a very high temperature, or stops sweating despite the heat."
  }
];
