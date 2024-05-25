document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburgerIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  closeIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });
});
