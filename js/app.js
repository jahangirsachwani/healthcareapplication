(function () {
  window.AppRouter.registerRoute("home", window.AppViews.home.render);
  window.AppRouter.registerRoute("sos", window.AppViews.sos.render);
  window.AppRouter.registerRoute("hospitals", window.AppViews.hospitals.render);
  window.AppRouter.registerRoute("firstaid", window.AppViews.firstaid.render);
  window.AppRouter.registerRoute("triage", window.AppViews.triage.render);
  window.AppRouter.registerRoute("settings", window.AppViews.settings.render);

  const dismissBtn = document.getElementById("dismiss-banner");
  if (dismissBtn) {
    dismissBtn.addEventListener("click", function () {
      document.getElementById("disclaimer-banner").style.display = "none";
    });
  }

  window.AppRouter.start();
})();
