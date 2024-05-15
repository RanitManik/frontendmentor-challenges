const tipPercentButtons = document.querySelectorAll(".tip-percent-btn");

let tipPercent = 0;

tipPercentButtons.forEach((tipPercentButton) => {
  tipPercentButton.addEventListener("click", (e) => {
    e.preventDefault();
    tipPercentButtons.forEach((tipPercentButton) => {
      tipPercentButton.classList.remove("tip-percent-btn-active");
    });
    tipPercentButton.classList.toggle("tip-percent-btn-active");
    tipPercent = tipPercentButton.value;
  });
});
