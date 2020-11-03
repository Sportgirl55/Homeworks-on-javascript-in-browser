'use strict';

let xhr = new XMLHttpRequest();
xhr.open('GET', ' https://netology-slow-rest.herokuapp.com/poll.php');
xhr.setRequestHeader('Content-Type','application/json');

xhr.addEventListener('readystatechange', (e) => {
     e.preventDefault(); 
     let answerPole = document.getElementById('poll__answers');
     if(xhr.readyState === 4 && xhr.status === 200) {
          let questions = JSON.parse(xhr.response);
          document.querySelector('#poll__title').innerText = questions.data.title;
          let arrOfAnswers = questions.data.answers;
          for (let answer of arrOfAnswers) {
               answerPole.insertAdjacentHTML('beforeEnd',
                      `<button class="poll__answer">${answer}</button>`);
          }
          let answers = Array.from(answerPole.querySelectorAll('.poll__answer'));
          for (let i = 0; i < answers.length; i++) {
               answers[i].addEventListener('click', function () {
                    alert('Спасибо, ваш голос засчитан!');
               })
          } 
     }
})
xhr.send();