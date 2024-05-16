const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const submitBtn = document.getElementById("submitBtn");
const dismissBtn = document.getElementById("dismissBtn");
const confirmedEmail = document.getElementById("confirmedEmail");
const initialPage = document.getElementById("initialPage");
const successPage = document.getElementById("successPage");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const isValid = email.checkValidity();
  if (!isValid || email.value === "") {
    emailError.classList.remove("invisible");
    email.classList.add("invalid-email");
  } else {
    emailError.classList.add("invisible");
    email.classList.remove("invalid-email");
  }
});

submitBtn.addEventListener("click", (e) => {
  if (email.checkValidity() && email.value !== "") {
    e.preventDefault();
    confirmedEmail.innerText = email.value;
    initialPage.classList.add("hidden");
    successPage.classList.remove("hidden");
  }
});

dismissBtn.addEventListener("click", (e) => {
  initialPage.classList.remove("hidden");
  successPage.classList.add("hidden");
});
