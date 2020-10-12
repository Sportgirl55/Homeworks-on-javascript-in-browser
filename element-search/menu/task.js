"use strict";

let menuLink = document.getElementsByClassName('menu__link');
let menuActive = document.getElementsByClassName('menu_active');

for (let i = 0; i < menuLink.length; i++) {
     if(menuLink[i].nextElementSibling != null) {
          menuLink[i].onclick = function () {
               for (let b = 0; b < menuActive.length; b++)  {
                    if (menuActive[b] !== undefined) {
                         menuActive[b].classList.remove('menu_active');
                    }
               }
               menuLink[i].nextElementSibling.classList.toggle('menu_active');
               return false;
          }          
     }
}