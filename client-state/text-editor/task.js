'use strict';

let textarea = document.querySelector('#editor');
textarea.value = localStorage.getItem('textarea');
textarea.addEventListener('input',() => { 
     localStorage.setItem('textarea', textarea.value)
});
