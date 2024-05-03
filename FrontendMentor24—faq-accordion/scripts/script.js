const dataAnswers = document.querySelectorAll("[data-answer]");
const images = document.querySelectorAll(".faq__container img");

function hideImages() {
  images.forEach((image) => {
    image.setAttribute("src", "images/icon-plus.svg");
  });
}

function hideAllAnswer() {
  dataAnswers.forEach((answer) => {
    answer.style.display = "none";
  });
}

hideAllAnswer();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const parentDiv = button.closest(".faq");
    const answerDiv = parentDiv.querySelector("[data-answer]");
    const image = button.querySelector("img");
    if (answerDiv.style.display === "block") {
      hideAllAnswer();
      answerDiv.style.display = "none";
      image.setAttribute("src", "images/icon-plus.svg");
    } else {
      hideAllAnswer();
      hideImages();
      answerDiv.style.display = "block";
      image.setAttribute("src", "images/icon-minus.svg");
    }
  });
});
