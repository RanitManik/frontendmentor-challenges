const slipID = document.getElementById("slipID");
const slipAdvice = document.getElementById("slipAdvice");
const shuffleBtn = document.getElementById("shuffleBtn");

function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      slipID.innerHTML = `Advice #${data.slip.id}`;
      slipAdvice.innerHTML = `"${data.slip.advice}"`;
      console.log("Here's your advice:", data.slip.advice);
    })
    .catch((error) => {
      console.error("There was a problem fetching the advice:", error);
    });
}

shuffleBtn.addEventListener("click", fetchAdvice);
