const form = document.querySelector("form");
const inputContainers = document.querySelectorAll(".input__container");
const radioBtnContainers = document.querySelectorAll(".radio__container");
const successMsg = document.querySelector(".success__message");

// selects radio buttons onclick of their container
radioBtnContainers.forEach((radioBtnContainer) => {
  radioBtnContainer.addEventListener("click", () => {
    radioBtnContainer.querySelector("input").checked = true;
  });
});

// check if each input is valid and show the respective error if it isn't when clicked the Submit Button

function inputValidator() {
  let allValid = true;
  inputContainers.forEach((inputContainer) => {
    const inputs = inputContainer.querySelectorAll("input");
    const textarea = inputContainer.querySelector("textarea");

    let valid = false;
    inputs.forEach((input) => {
      if (input.type === "text" && input.value !== "") {
        valid = true;
      } else if (input.type === "email" && validateEmail(input.value)) {
        valid = true;
      } else if (input.type === "radio" && input.checked) {
        valid = true;
      } else if (input.checked) {
        valid = true;
      }
    });

    if (!valid) {
      inputContainer.classList.add("container-error");
    } else {
      inputContainer.classList.remove("container-error");
    }

    if (textarea) {
      if (!textarea.value) {
        inputContainer.classList.add("container-error");
      } else {
        inputContainer.classList.remove("container-error");
      }
    }
  });

  inputContainers.forEach((inputContainer) => {
    if (inputContainer.classList.contains("container-error")) {
      allValid = false;
    }
  });

  if (allValid) {
    form.reset();
    successMsg.style.visibility = "visible";
    setTimeout(() => {
      successMsg.style.visibility = "hidden";
    }, 3000);
  }
}

// function to check if the email is valid
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputValidator();
});
