"use strict";

let tabs = Array.from(document.querySelectorAll('.tab'));
let tabContent = document.querySelectorAll('.tab__content');

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
