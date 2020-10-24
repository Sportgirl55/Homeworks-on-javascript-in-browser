"use strict";

let btnSmall = document.querySelector('.font-size_small');
let btnBig = document.querySelector('.font-size_big');
let book = document.querySelector('.book');
let fontSize = Array.from(document.getElementsByClassName('font-size'));


fontSize.forEach(elem => {
          elem.addEventListener('click', function (e) {
          let index = fontSize.findIndex(btn => btn.classList.contains('font-size_active')); 
          fontSize[index].classList.remove('font-size_active'); 
          e.preventDefault();
          elem.classList.add('font-size_active');  
          if (btnSmall == elem) {
               book.classList.add('book_fs-small');
               book.classList.remove('book_fs-big');
          } else if (btnBig == elem) {
               book.classList.remove('book_fs-small');
               book.classList.add('book_fs-big');
          } else {
               book.classList.remove('book_fs-small');
               book.classList.remove('book_fs-big');
          }
     })
});
  


// Рабочий вариант

// let btnSmall = document.querySelector('.font-size_small');
// let btnBig = document.querySelector('.font-size_big');
// let book = document.querySelector('.book');

// let fontSize = Array.from(document.querySelectorAll('.font-size'));
// let index = fontSize.findIndex(btn => btn.classList.contains('font-size_active')); 

// btnBig.addEventListener('click', function (event) {
//      fontSize[index].classList.remove('font-size_active'); 
//      event.preventDefault();
//      btnBig.classList.add('font-size_active');
//      book.classList.add('book_fs-big');
// })

// btnSmall.addEventListener('click', function (event) {
//      fontSize[index].classList.remove('font-size_active'); 
//      event.preventDefault();
//      btnSmall.classList.add('font-size_active');
//      book.classList.add('book_fs-small');
// })



