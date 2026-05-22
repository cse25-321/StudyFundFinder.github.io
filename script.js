// Show welcome alert when Get Started is clicked
function showMessage(event) {
  event.preventDefault();
  alert("Welcome! Start exploring scholarships.");
  window.location.href = "scholarships.html";
}

function sendMessage(event) {
  event.preventDefault();

  var name    = document.getElementById('contactName').value.trim();
  var email   = document.getElementById('contactEmail').value.trim();
  var message = document.getElementById('contactMessage').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields before sending.");
    return;
  }

  alert("Thank you, " + name + "! Your message has been sent successfully. We'll reply to " + email + " soon.");
  document.getElementById('contactForm').reset();
}
