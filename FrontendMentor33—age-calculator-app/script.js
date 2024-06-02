const submitBtn = document.querySelector("#submit-btn");
const dayInput = document.querySelector("#day-input");
const monthInput = document.querySelector("#month-input");
const yearInput = document.querySelector("#year-input");

const yearsElement = document.querySelector("#years");
const monthsElement = document.querySelector("#months");
const daysElement = document.querySelector("#days");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const day = parseInt(dayInput.value, 10);
  const month = parseInt(monthInput.value, 10);
  const year = parseInt(yearInput.value, 10);

  let isValid = true;

  if (isNaN(day) || day < 1 || day > 31) {
    dayInput.parentElement.classList.add("invalid-input");
    dayInput.setCustomValidity("Please enter a valid day (1-31).");
    isValid = false;
  } else {
    dayInput.setCustomValidity("");
    dayInput.parentElement.classList.remove("invalid-input");
  }

  if (isNaN(month) || month < 1 || month > 12) {
    monthInput.parentElement.classList.add("invalid-input");
    monthInput.setCustomValidity("Please enter a valid month (1-12).");
    isValid = false;
  } else {
    monthInput.setCustomValidity("");
    monthInput.parentElement.classList.remove("invalid-input");
  }

  const currentYear = new Date().getFullYear();
  if (isNaN(year) || year < 1900 || year > currentYear) {
    yearInput.parentElement.classList.add("invalid-input");
    yearInput.setCustomValidity(
      `Please enter a valid year (1900-${currentYear}).`,
    );
    isValid = false;
  } else {
    yearInput.setCustomValidity("");
    yearInput.parentElement.classList.remove("invalid-input");
  }

  if (!isValid) {
    dayInput.reportValidity();
    monthInput.reportValidity();
    yearInput.reportValidity();
    return;
  }

  const birthDate = new Date(year, month - 1, day);

  const currentDate = new Date();

  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }
  if (days < 0) {
    months--;
    const lastMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0,
    );
    days += lastMonthDate.getDate();
  }

  yearsElement.textContent = years;
  monthsElement.textContent = months;
  daysElement.textContent = days;
});
