"use strict";
let prevArrow = document.querySelector('.slider__arrow_prev');
let nextArrow = document.querySelector('.slider__arrow_next');
let slider = Array.from(document.querySelectorAll('.slider__item'));

let i = 0;

nextArrow.addEventListener('click', function () {
     i++;
     // i <= slider.length ? slider[i - 1].classList.remove('slider__item_active') :  i = 0;
     if (i <= slider.length) {
          slider[i - 1].classList.remove('slider__item_active');
     } if (i >= slider.length) {
           i = 0;
     } 
     slider[i].classList.add('slider__item_active'); 
});

prevArrow.addEventListener('click', function () {
     i--;
     i > 0 ? slider[i + 1].classList.remove('slider__item_active') : i = slider.length - 1;
     slider[i].classList.add('slider__item_active');
});






// "use strict";
// let prevArrow = document.querySelector('.slider__arrow_prev');
// let nextArrow = document.querySelector('.slider__arrow_next');
// let slider = document.querySelectorAll('.slider__item');
// let i = 0;
// nextArrow.addEventListener('click', function () {
//      i++;
//      if (i >= slider.length) {
//           slider[i - 1].classList.remove('slider__item_active');
//           i = 0;
//           slider[i].classList.add('slider__item_active');
//      } else {
//           slider[i - 1].classList.remove('slider__item_active');
//           slider[i].classList.add('slider__item_active');
//      }
// })

// prevArrow.addEventListener('click', function () {
//      i--;
//      if(i <= 0) {
//           slider[i + 1].classList.remove('slider__item_active');
//           i = slider.length - 1;
//           slider[i].classList.add('slider__item_active');
//      } else {
//           slider[i + 1].classList.remove('slider__item_active');
//           slider[i].classList.add('slider__item_active');
//      }
// })

