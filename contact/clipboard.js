function copyDiscordUsernameToClipboard() {
  console.log("Copying Discord username to clipboard");

  // Get the text field
  var copyText = "ThePhaseless";

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  // Get the popup
  var popup = document.getElementById("myPopup");

  // Toggle the show class
  popup.classList.toggle("show");
}
