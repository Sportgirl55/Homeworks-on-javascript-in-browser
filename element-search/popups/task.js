"use strict";

let modalMain = document.getElementById('modal_main');
     modalMain.classList.add('modal_active');

let closedWindow = document.getElementsByClassName('modal__close');
for (let i = 0; i < closedWindow.length; i++)
     closedWindow[i].onclick = function () {
          this.closest('.modal').classList.remove('modal_active');  
     }
       
let success = document.querySelector('.show-success');
let modalSuccess = document.querySelector('#modal_success');
     success.onclick = function () {
          modalMain.classList.remove('modal_active');
          modalSuccess.classList.add('modal_active');
     }
 
document.querySelector('.btn_success').onclick = function () {
     this.closest('.modal_active').classList.remove('modal_active');
     }
        
