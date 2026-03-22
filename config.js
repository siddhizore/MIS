// Set REMOTE_API to your Render (or other) backend URL for GitHub Pages / static hosting.
(function () {
  if (typeof window === 'undefined') return;
  var REMOTE_API = 'https://mis-5.onrender.com';
  window.MIS_REMOTE_API_DEFAULT = REMOTE_API;
  var loc = window.location;
  var isLocal = loc && (loc.hostname === 'localhost' || loc.hostname === '127.0.0.1');
  var isFile = loc && (loc.protocol === 'file:' || loc.hostname === '' || loc.origin === 'null');

  if (isLocal) {
    window.MIS_API_URL = loc.origin;
    return;
  }
  if (isFile) {
    window.MIS_API_URL = 'http://localhost:3000';
    return;
  }

  window.MIS_API_URL = REMOTE_API;
})();
