const form = document.getElementById("signupForm");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("valid");

  let firstName = fName.value;
  let lastName = lName.value;
  let emailValue = email.value;
  let passwordValue = password.value;

  // Validate First Name
  if (firstName === "") {
    showError(fName);
  } else {
    hideError(fName);
  }

  // Validate Last Name
  if (lastName === "") {
    showError(lName);
  } else {
    hideError(lName);
  }

  // Validate Email
  if (!isValidEmail(emailValue)) {
    showError(email);
  } else {
    hideError(email);
  }

  // Validate Password
  if (passwordValue === "") {
    showError(password);
  } else {
    hideError(password);
  }
});

function showError(input) {
  const errorIcon = input.nextElementSibling;
  const errorMessage = errorIcon.nextElementSibling;
  console.log(errorMessage);
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

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
