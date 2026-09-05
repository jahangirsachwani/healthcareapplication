(function () {
  const AppUtils = window.AppUtils;

  function render(container) {
    const symptoms = window.APP_DATA.symptoms;
    const thresholds = window.APP_DATA.triageThresholds;

    container.innerHTML =
      '<section class="view-section">' +
      "<h1>\u{1FA7A} Symptom Check</h1>" +
      '<p class="warning-note">Not a medical diagnosis. Not a substitute for professional advice. When in doubt, seek immediate care.</p>' +
      '<form id="triage-form">' +
      symptoms
        .map(function (s) {
          return (
            '<label class="checkbox-row"><input type="checkbox" value="' + s.id + '"> ' +
            AppUtils.escapeHtml(s.label) +
            "</label>"
          );
        })
        .join("") +
      '<div class="triage-actions">' +
      '<button type="submit" class="btn btn-primary">Check Severity</button> ' +
      '<button type="button" id="triage-reset" class="btn btn-secondary">Reset</button>' +
      "</div>" +
      "</form>" +
      '<div id="triage-result"></div>' +
      "</section>";

    const form = document.getElementById("triage-form");
    const resultEl = document.getElementById("triage-result");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const selectedIds = AppUtils.qsa("input[type=checkbox]:checked", form).map((cb) => cb.value);
      const selected = symptoms.filter((s) => selectedIds.includes(s.id));

      if (selected.length === 0) {
        resultEl.innerHTML = '<div class="callout">Select at least one symptom to check.</div>';
        return;
      }

      const hasRedFlag = selected.some((s) => s.redFlag);
      const score = selected.reduce((sum, s) => sum + s.weight, 0);

      let tier, tierClass, advice;
      if (hasRedFlag) {
        tier = "Emergency";
        tierClass = "callout-danger";
        advice = "Your symptoms may indicate a medical emergency. Call your local emergency number now.";
      } else if (score >= thresholds.urgent) {
        tier = "Urgent Care";
        tierClass = "callout-warning";
        advice = "Your symptoms suggest you should seek urgent medical care soon.";
      } else if (score >= thresholds.doctor) {
        tier = "See a Doctor";
        tierClass = "callout-info";
        advice = "Consider seeing a doctor within the next 24 hours.";
      } else {
        tier = "Self-Care";
        tierClass = "callout-success";
        advice = "Your symptoms seem mild. Rest, monitor, and seek care if they worsen.";
      }

      resultEl.innerHTML =
        '<div class="callout ' + tierClass + '">' +
        "<h2>" + tier + "</h2>" +
        "<p>" + advice + "</p>" +
        (hasRedFlag ? '<a class="btn btn-danger btn-large" href="#/sos">Go to SOS</a>' : "") +
        "</div>";
    });

    document.getElementById("triage-reset").addEventListener("click", function () {
      form.reset();
      resultEl.innerHTML = "";
    });
  }

  window.AppViews = window.AppViews || {};
  window.AppViews.triage = { render: render };
})();
