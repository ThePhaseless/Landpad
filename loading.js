// Show overlay when page is loading
document.getElementById("myOverlay").style.display = "block";

// Hide overlay when page is loaded
window.addEventListener("load", function () {
  document.getElementById("myOverlay").style.display = "none";
  console.log("Page loaded");
});
