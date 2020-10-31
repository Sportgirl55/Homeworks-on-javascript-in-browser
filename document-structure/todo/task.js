'use strict';

let input = document.getElementById('task__input');
let button = document.getElementById('tasks__add');

button.addEventListener('click', function (event) {
     let task = document.createElement('div'); 
     if (input.value != '') {
          task.classList.add('task');
          task.insertAdjacentHTML('beforeend', `
               <div class="task__title">
                    ${input.value}
               </div>
               <a href="#" class="task__remove">&times;</a>
          `);
          document.getElementById('tasks__list').appendChild(task);
          let taskRemove = task.querySelector('.task__remove');
          taskRemove.addEventListener('click', (e) => 
               e.target.parentElement.remove()
          )
          event.preventDefault();
          input.value = '';
     } else {
          event.preventDefault();
     }    
})
