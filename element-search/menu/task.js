"use strict";

let menuLink = Array.from(document.querySelectorAll('.menu__link')); //ссылки в каждом пункте меню

menuLink.forEach((elem) => {
     elem.onclick = function () {
          let menuActive = document.querySelector('.menu_active');// активное меню
          if(menuActive) {
               if (menuActive !== elem.nextElementSibling) {
                    menuActive.classList.remove('menu_active');
          }
     }
     elem.nextElementSibling.classList.toggle('menu_active');
               return false;
     }
}) 



// // Самый простой рабочий вариант
// "use strict";

// let menuLink = Array.from(document.getElementsByClassName('menu__link'));
// menuLink.forEach(function(elem) {
//      elem.onclick = function () {
//           if(elem.nextElementSibling != null) {
//                elem.nextElementSibling.classList.toggle('menu_active');
//                return false;
//           }      
//      }
// }) 
