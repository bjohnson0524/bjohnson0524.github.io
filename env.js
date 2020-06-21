(function (window) {
  window.__env = window.__env || {};

  // API url
  window.__env.protocol = 'http://';

  window.__env.domain = 'localhost';

  window.__env.port = ':8080';

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;
}(this));