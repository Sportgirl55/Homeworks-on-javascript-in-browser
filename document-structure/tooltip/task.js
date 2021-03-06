'use strict';

let phrases = document.querySelectorAll('.has-tooltip');
let tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

for (let phrase of phrases)
phrase.addEventListener('click', function (e) {
     phrase.appendChild(tooltip);
     tooltip.contains(document.querySelector('.tooltip_active')) && document.querySelector('.tooltip_active').innerText == e.target.title ? 
     tooltip.classList.remove('tooltip_active') : tooltip.classList.add('tooltip_active');
     tooltip.style.top = this.style.top;
     tooltip.style.left = `${this.getBoundingClientRect().left}px`;
     tooltip.innerText = e.target.title;
     e.preventDefault();
})
