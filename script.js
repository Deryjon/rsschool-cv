document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('menu_list');
  
    menuIcon.addEventListener('click', function() {
      navList.classList.toggle('active');
      menuIcon.classList.toggle('active');
    });
  });
  