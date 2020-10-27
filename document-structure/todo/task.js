'use strict';

let input = document.getElementById('task__input');
let button = document.getElementById('tasks__add');
let taskRemove = document.getElementsByClassName('task__remove');

button.addEventListener('click', function (event) {
     let task = document.createElement('div');
     if (input.value != '') {
          task.classList.add('task');
          task.innerHTML += `
               <div class="task__title">
                    ${input.value}
               </div>
               <a href="#" class="task__remove">&times;</a>
          `
          document.getElementById('tasks__list').appendChild(task);
          event.preventDefault();
          input.value = '';
     }
     for (let btnRmv of taskRemove) 
          btnRmv.addEventListener('click', (e) => 
               e.target.parentElement.remove()
          )
})