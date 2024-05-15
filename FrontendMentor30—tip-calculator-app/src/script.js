const tipPercentButtons = document.querySelectorAll(".tip-percent-btn");
const tipInput = document.getElementById("tipInput");
const resetBtn = document.getElementById("resetBtn");
const allInputs = document.querySelectorAll("input");
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipPerPersonSpan = document.getElementById("tipPerPerson");
const billPerPersonSpan = document.getElementById("billPerPerson");

let tipPercent = 0;
let bill = 0;
let people = 0;

tipPercentButtons.forEach((tipPercentButton) => {
  tipPercentButton.addEventListener("click", (e) => {
    e.preventDefault();
    tipInput.value = "";
    tipPercentButtons.forEach((btn) => {
      btn.classList.remove("tip-percent-btn-active");
    });
    tipPercentButton.classList.add("tip-percent-btn-active");
    tipPercent = parseFloat(tipPercentButton.value);
    calculateBillAndTip();
  });
});

tipInput.addEventListener("focus", () => {
  tipPercentButtons.forEach((button) => {
    button.classList.remove("tip-percent-btn-active");
  });
});

tipInput.addEventListener("input", () => {
  tipPercent = parseFloat(tipInput.value) || 0;
  calculateBillAndTip();
});

allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (resetBtn.classList.contains("inactiveResetBtn")) {
      resetBtn.classList.remove("inactiveResetBtn");
      resetBtn.classList.add("activeResetBtn");
    }
    calculateBillAndTip();
  });
});

resetBtn.addEventListener("click", () => {
  allInputs.forEach((input) => {
    input.value = "";
  });
  tipPercentButtons.forEach((btn) => {
    btn.classList.remove("tip-percent-btn-active");
  });
  tipPercent = 0;
  bill = 0;
  people = 0;
  tipPerPersonSpan.innerHTML = "0.00";
  billPerPersonSpan.innerHTML = "0.00";
  resetBtn.classList.remove("activeResetBtn");
  resetBtn.classList.add("inactiveResetBtn");
});

billInput.addEventListener("input", () => {
  bill = parseFloat(billInput.value) || 0;
  calculateBillAndTip();
});

peopleInput.addEventListener("input", () => {
  people = parseInt(peopleInput.value) || 0;
  calculateBillAndTip();
});

function calculateBillAndTip() {
  if (
    bill > 0 &&
    bill <= 10000 &&
    people > 0 &&
    people <= 100 &&
    tipPercent >= 0 &&
    tipPercent <= 100
  ) {
    const tipPerPerson = (bill * tipPercent) / (100 * people);
    const billPerPerson = bill / people + tipPerPerson;
    tipPerPersonSpan.innerHTML = tipPerPerson.toFixed(2);
    billPerPersonSpan.innerHTML = billPerPerson.toFixed(2);
  } else {
    tipPerPersonSpan.innerHTML = "0.00";
    billPerPersonSpan.innerHTML = "0.00";
  }
}
