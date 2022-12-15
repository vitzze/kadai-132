'use strict';

{
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navi = document.getElementById('hamburger-navigation');
  
  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navi.classList.toggle('active');
  });


}