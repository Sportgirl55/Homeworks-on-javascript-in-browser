"use strict";

let menuLink = Array.from(document.getElementsByClassName('menu__link'));
let menuActive = document.getElementsByClassName('menu_active');
menuLink.forEach(function (elem) {
     if(elem.nextElementSibling != null) {
          elem.onclick = function () {
               closeMenu ();
               elem.nextElementSibling.classList.toggle('menu_active');
               if (menuActive[0] !== undefined) {
                    elem.onclick = function () {
                         if (this.querySelector('.menu_active')) {
                              this.classList.remove('menu_active');
                         }
                    }
               }
               return false;
          }
     }
})


function closeMenu(){
     for (var i = 0; i < menuActive.length; i++) {
         menuActive[i].classList.remove('menu_active');
     }
}
 
// Первоначальный полурабочий вариант

  
// "use strict";

// let menuLink = document.getElementsByClassName('menu__link');
// let menuActive = document.getElementsByClassName('menu_active');

// for (let i = 0; i < menuLink.length; i++) {
//      if(menuLink[i].nextElementSibling != null) {
//           menuLink[i].onclick = function () {
//                for (let b = 0; b < menuActive.length; b++)  {
//                     if (menuActive[b] !== undefined) {
//                          menuActive[b].classList.remove('menu_active');
//                     }
//                }
//                menuLink[i].nextElementSibling.classList.toggle('menu_active');
//                return false;
//           }          
//      }
// }


