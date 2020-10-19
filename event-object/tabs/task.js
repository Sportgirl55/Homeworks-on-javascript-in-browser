"use strict";

let tabs = Array.from(document.querySelectorAll('.tab'));
let tabContent = document.querySelectorAll('.tab__content');


// tabs.forEach(function(elem) {
//      elem.addEventListener('click', function () {
//           console.log(elem.indexOf('', 0))
//      })
// })





for(let i = 0; i < tabs.length; i++) {
     tabs[i].addEventListener('click', function () {
          tabs.forEach(function (item, index, arr) {
               arr[index].classList.remove('tab_active');  
          })
          tabContent.forEach(function (item, index, arr) {
               arr[index].classList.remove('tab__content_active');
          })
                     tabs[i].classList.add('tab_active');
                     tabContent[i].classList.add('tab__content_active');
                })
}








// let button = Array.from(document.querySelectorAll('.dropdown__value')); //кнопка
// let menu = Array.from(document.querySelectorAll('.dropdown__list')); // список
// let dropDownItem = Array.from(document.querySelectorAll('.dropdown__item')); // пункты списка

// for(let i = 0; i < button.length; i++) {
//      button[i].addEventListener('click', function () {
//           this.nextElementSibling.classList.toggle('dropdown__list_active');
//      })
// }

// dropDownItem.forEach(function(elem) {
//      elem.onclick = function () {
//           this.closest('.dropdown__list').classList.remove('dropdown__list_active');
//           this.closest(".dropdown").firstElementChild.textContent = this.textContent;
//               return false; 
//      }
// })



