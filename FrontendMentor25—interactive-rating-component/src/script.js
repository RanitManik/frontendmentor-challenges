const btnDiv = document.querySelector("#btnDiv");
const buttons = btnDiv.querySelectorAll("button");
const submitBtn = document.querySelector("#btnSubmit");
const rating = document.querySelector("#rating");
const ratingPage = document.getElementById("rate-page");
const thankYouPage = document.getElementById("thank-you-page");

thankYouPage.style.display = "none";

let userRate = -1;
buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.toggle("active");
    userRate = btn.innerText;
  }),
);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (userRate <= 0) {
    alert("Please select a number");
    return;
  }
  ratingPage.style.display = "none";
  rating.innerText = userRate;
  thankYouPage.style.display = "block";
  console.log(`You choose ${userRate}`);
});
