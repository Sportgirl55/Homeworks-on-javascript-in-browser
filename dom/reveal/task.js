"use strict";

let reveal = Array.from(document.querySelectorAll('.reveal'));
reveal.forEach(function(elem) {
     document.addEventListener('scroll', function () {
          let elementTop = elem.getBoundingClientRect().top;
          if (elementTop > 0 && elementTop < window.innerHeight) {
               elem.classList.add('reveal_active');
          }  else {
               elem.classList.remove('reveal_active');
          }
     }) 
 } ) 