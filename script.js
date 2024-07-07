document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navList = document.getElementById("menu_list");
  const links = document.querySelectorAll(".menu_list .nav_links");

  [...links].forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });

  function toggleMenu() {
    navList.classList.toggle("active");
    menuIcon.classList.toggle("active");
  }
  menuIcon.addEventListener("click", toggleMenu);
});
