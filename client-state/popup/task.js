'use strict';

let modal = document.getElementById('subscribe-modal');
let modalClose = document.querySelector('.modal__close');

const getCookie = (name) => {
     const value = "; "+ document.cookie;
     let parts = value.split("; "+ name + "=");
     if (parts.length === 2) {
          return parts.pop()
          .split(";")
          .shift();
     }
}

if(!getCookie('modalClosed')) {
     modal.classList.add('modal_active');
}

modalClose.onclick = () => {
     modal.classList.remove('modal_active');  
     document.cookie = 'modalClosed=true'; 
     console.log(document.cookie);
}