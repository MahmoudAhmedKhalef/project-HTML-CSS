const loginButton = document.getElementById("login-button");
const signupButton = document.getElementById("signup-button");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});

signupButton.addEventListener("click", function (event) {
  event.preventDefault();
  signupForm.style.display = "block";
  loginForm.style.display = "none";
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Login successful!");
});

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Sign up successful!");
});
