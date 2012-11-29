chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html');

  var notification = webkitNotifications.createNotification(
    'bleh.png',
    'hello!',
    'Im a newborn!'
  );
  notification.show();
});

chrome.app.runtime.onInstalled.addListener(function() {
  // do stuff on installation
});

chrome.app.runtime.onSuspend.addListener(function() {
  // close open connections / cleanup
});