"use strict";

let listOfInterests = document.querySelector('.interests_main');

listOfInterests.addEventListener('change', function(event) {
     let parent = event.target.closest('.interest');
          Array.from(parent.getElementsByTagName('input')).forEach(elem =>
               event.target.checked ? elem.checked = true : elem.checked = false)
})

