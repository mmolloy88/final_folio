// get the contact button

// add event listener to open the window upon clicking "contact"

// display the contact modal / email form

// get the "x" image on the modal to close the window

// open modal
document
  .getElementById("contact-button")
  .addEventListener("click", openContactModal);

function openContactModal() {
  document.getElementById("contact-form").style.display = "flex";
}

// close modal
document
  .getElementById("close-modal")
  .addEventListener("click", closeContactModal);

function closeContactModal() {
  document.getElementById("contact-form").style.display = "none";
}
