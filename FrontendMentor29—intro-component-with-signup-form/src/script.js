const form = document.getElementById("signupForm");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

email.addEventListener("keydown", (e) => {
  const isValid = e.target.checkValidity();
  if (!isValid) {
    showError(email);
  } else hideError(email);
});
fName.addEventListener("keydown", (e) => {
  checkValidityExceptEmail(fName);
});
lName.addEventListener("keydown", (e) => {
  checkValidityExceptEmail(lName);
});
password.addEventListener("keydown", (e) => {
  checkValidityExceptEmail(password);
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkValidityExceptEmail(fName);
  checkValidityExceptEmail(lName);
  checkValidityEmail(email);
  checkValidityExceptEmail(password);
});

function checkValidityExceptEmail(input) {
  const isValid = input.value !== "";
  if (!isValid) {
    showError(input);
  } else hideError(input);
}

function checkValidityEmail(input) {
  const isValid = isValidEmail(input.value);
  if (!isValid) {
    showError(input);
  } else hideError(input);
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function showError(input) {
  const errorIcon = input.nextElementSibling;
  const errorMessage = errorIcon.nextElementSibling;
  input.classList.add("input-error");
  errorIcon.classList.remove("hidden");
  errorMessage.classList.remove("hidden");
}

function hideError(input) {
  const errorIcon = input.nextElementSibling;
  const errorMessage = errorIcon.nextElementSibling;
  input.classList.remove("input-error");
  errorIcon.classList.add("hidden");
  errorMessage.classList.add("hidden");
}
