window.onload = function () {
  var currentURL = window.location.href;
  var domain = currentURL.split("/")[2]; // Extract the domain from the URL
  if (currentURL.includes("/services")) {
    window.location.href = "http://dashboard." + domain;
  }
};
