"use strict"
let holeWithMole = document.getElementsByClassName("hole");
let deadCount = document.getElementById("dead");
let lost = document.getElementById("lost");
         
let getHole = index => document.getElementById(`hole${index}`);
let reset = () => {lost.textContent = 0; deadCount.textContent = 0};

for (let i = 1; i < holeWithMole.length; i++) {
     getHole(i).onclick = function () {
          if (getHole(i).className.includes( 'hole_has-mole' )) {
               deadCount.textContent++; 
          } else {
               lost.textContent++; 
          } if (lost.textContent == 5) {
               alert("Ты проиграл!");
               reset();
          }  if (deadCount.textContent == 10){
               alert("Ураа!!Ты победил!");
               reset();
          }
     }   
}
         