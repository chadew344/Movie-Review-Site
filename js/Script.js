document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.getElementById("main-nav");

  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && event.target !== menuBtn) {
    }
  });
});
