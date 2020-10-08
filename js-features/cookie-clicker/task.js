"use strict";

let cookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");

cookie.onclick = function () {
     clickerCounter.textContent++;
     const bigSize = 250, smallSize = 200; 
     if (cookie.width == smallSize) {
          cookie.width = bigSize;
     } else {
          cookie.width = smallSize;
     }
}

cookie.onclick;


