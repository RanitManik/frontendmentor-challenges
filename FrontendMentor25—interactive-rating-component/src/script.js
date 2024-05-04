const main = document.getElementById("main");
const btnDiv = document.querySelector("#btnDiv");
const buttons = btnDiv.querySelectorAll("button");
const submitBtn = document.querySelector("#btnSubmit");

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
  console.log(`You choose ${userRate}`);
  main.classList.add("justify-items-center", "text-center");
  main.innerHTML = `
      <img src="./images/illustration-thank-you.svg" alt="" />
      <span class="bg-dark-blue py-2 px-4 rounded-full text-primary">You selected ${userRate} out of 5</span>
      <div>
        <h1 class="mb-2 text-3xl font-bold text-white">Thank you!</h1>
        <p class="text-light-gray">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
  `;
});
