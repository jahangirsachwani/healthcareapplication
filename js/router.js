window.AppRouter = (function () {
  const routes = {};

  function registerRoute(name, handler) {
    routes[name] = handler;
  }

  function currentRoute() {
    const hash = window.location.hash.replace(/^#\/?/, "");
    const parts = hash.split("/").filter(Boolean);
    return { name: parts[0] || "home", param: parts[1] };
  }

  function updateActiveNav(name) {
    window.AppUtils.qsa(".app-nav a").forEach(function (a) {
      const linkName = a.getAttribute("href").replace(/^#\/?/, "") || "home";
      a.classList.toggle("active", linkName === name);
    });
  }

  function render() {
    const root = document.getElementById("view-root");
    const { name, param } = currentRoute();
    const handler = routes[name];
    root.innerHTML = "";
    updateActiveNav(name);
    if (handler) {
      handler(root, param);
    } else {
      root.innerHTML = '<section class="view-section"><h1>Page not found</h1><a href="#/">Go home</a></section>';
    }
    window.scrollTo(0, 0);
  }

  function start() {
    window.addEventListener("hashchange", render);
    render();
  }

  return { registerRoute, start };
})();
