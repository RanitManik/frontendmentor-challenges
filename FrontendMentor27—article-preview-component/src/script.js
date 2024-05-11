const desktopTooltip = document.querySelector("#desktop-tooltip");
const shareBtn = document.querySelector("#share-btn");
shareBtn.addEventListener("click", (e) => {
  console.log("clicked");
  desktopTooltip.classList.toggle("invisible");
  shareBtn.classList.toggle("bg-light-grayish-blue");
  shareBtn.classList.toggle("bg-very-dark-grayish-blue");
});
