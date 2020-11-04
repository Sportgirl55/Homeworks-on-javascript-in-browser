'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
     e.preventDefault();
     const xhr = new XMLHttpRequest();
     xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
     xhr.upload.onprogress = (e) => {
          document.getElementById('progress').value = e.loaded / e.total;
        }
        xhr.send(new FormData(form));
})
