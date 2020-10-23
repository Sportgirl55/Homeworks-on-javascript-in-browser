"use strict";

let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let index = rotatorCase.findIndex(item => item.classList.contains('rotator__case_active'));
let timerId = setTimeout(function changer () {
          rotatorCase[index].classList.remove('rotator__case_active'); 
          index = index === rotatorCase.length - 1 ? 0 : index + 1; 
          rotatorCase[index].classList.add('rotator__case_active'); 
          timerId = setTimeout(changer, 1000); 
     }, 1000);
