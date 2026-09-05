(function () {
  const AppUtils = window.AppUtils;

  function renderList(container) {
    const topics = window.APP_DATA.firstaid;
    container.innerHTML =
      '<section class="view-section">' +
      "<h1>\u{1FA79} First Aid Guide</h1>" +
      '<p class="warning-note">General guidance only — not a substitute for professional medical training or care.</p>' +
      '<div class="card-grid">' +
      topics
        .map(function (t) {
          return (
            '<a class="feature-card" href="#/firstaid/' + t.id + '">' +
            '<span class="icon">' + t.icon + "</span>" +
            "<h2>" + AppUtils.escapeHtml(t.title) + "</h2>" +
            "<p>" + AppUtils.escapeHtml(t.summary) + "</p>" +
            "</a>"
          );
        })
        .join("") +
      "</div></section>";
  }

  function renderDetail(container, id) {
    const topic = window.APP_DATA.firstaid.find((t) => t.id === id);
    if (!topic) {
      renderList(container);
      return;
    }
    container.innerHTML =
      '<section class="view-section">' +
      '<a href="#/firstaid" class="back-link">&larr; Back to First Aid Guide</a>' +
      "<h1>" + topic.icon + " " + AppUtils.escapeHtml(topic.title) + "</h1>" +
      '<ol class="steps-list">' +
      topic.steps.map((s) => "<li>" + AppUtils.escapeHtml(s) + "</li>").join("") +
      "</ol>" +
      '<div class="callout callout-danger"><strong>Call emergency services if:</strong> ' +
      AppUtils.escapeHtml(topic.whenToCallEmergency) +
      "</div>" +
      '<p class="warning-note">This is general guidance, not a substitute for professional training or medical care.</p>' +
      "</section>";
  }

  function render(container, param) {
    if (param) renderDetail(container, param);
    else renderList(container);
  }

  window.AppViews = window.AppViews || {};
  window.AppViews.firstaid = { render: render };
})();
