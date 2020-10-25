"use strict";

const chat = document.querySelector('.chat-widget__messages');
const inputText = document.getElementById('chat-widget__input');
function currentTime () {
     const date = new Date();
     let hours = date.getHours();
     let minutes = date.getMinutes();
     hours < 10 ? hours = "0" + hours : hours;
     minutes < 10 ? minutes = "0" + minutes : minutes; 
          return `${hours}:${minutes}`;
}

const answerArr = [
     'Топрый фечер! Пашьоль нафик',
     'Иди в баню!',
     'Кто здесь?',
     'Бла-бла-бла!',
     'И не пиши сюда больше!',
     'Ты кто?',
     'Мы перезвоним вам... никогда!',
     'Ваш звонок совсем не важен для нас!',
     'Хозяина нет дома'     
];

document.querySelector('.chat-widget').addEventListener('click', function () {
     this.classList.add('chat-widget_active');
})

document.querySelector('input').addEventListener('keypress', function sendMessage(e) {
     if (inputText.value != '' && e.key == 'Enter') {
     chat.innerHTML += `
          <div class="message message_client">
               <div class="message__time">${currentTime()}</div>
               <div class="message__text">
                    ${inputText.value}  
               </div>
          </div>`; 
          inputText.value = '';
     let randomAnswer = Math.floor(Math.random() * answerArr.length);
     chat.innerHTML += `
          <div class="message">
               <div class="message__time">${currentTime()}</div>
               <div class="message__text">
                    ${answerArr[randomAnswer]}
               </div>
          </div>`; 
          chat.lastElementChild.scrollIntoView(false);
    }
});



 
 
