document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("statusMsg");

  if (!name || !mobile || !message) {
    status.style.color = "red";
    status.innerText = "Please fill all fields.";
    status.style.display = "block";
    return;
  }

  // Simulated success message
  status.style.color = "green";
  status.innerText = "✅ Message sent successfully! We'll get back to you soon.";
  status.style.display = "block";

  // Clear form
  document.getElementById("contactForm").reset();
});
