const mockDatabase = JSON.parse(localStorage.getItem("mockDatabase")) || {};
document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  if (mockDatabase[email]) {
    alert("User already exists. Please login.");
  } else {
    mockDatabase[email] = password;
    localStorage.setItem("mockDatabase", JSON.stringify(mockDatabase));
    alert("Registration successful! You can now log in.");
    window.location.href = "login.html";
  }
});
