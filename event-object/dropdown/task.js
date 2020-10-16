"use strict";

let button = Array.from(document.querySelectorAll('.dropdown__value')); //кнопка
let menu = Array.from(document.querySelectorAll('.dropdown__list')); // список
let dropDownItem = Array.from(document.querySelectorAll('.dropdown__item')); // пункты списка

for(let i = 0; i < button.length; i++) {
     button[i].addEventListener('click', function () {
          this.nextElementSibling.classList.toggle('dropdown__list_active');
     })
}

dropDownItem.forEach(function(elem) {
     elem.onclick = function () {
          this.closest('.dropdown__list').classList.remove('dropdown__list_active');
          this.closest(".dropdown").firstElementChild.textContent = this.textContent;
              return false; 
     }
})



