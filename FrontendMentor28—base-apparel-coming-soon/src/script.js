const submitBtn = document.querySelector("#submitBtn");
const input = document.querySelector("#email");
const errorIcon = document.querySelector("#errorIcon");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

input.addEventListener("input", (e) => {
  if (!e.target.validity.valid) {
    errorIcon.classList.remove("invisible");
  } else {
    errorIcon.classList.add("invisible");
  }
});
