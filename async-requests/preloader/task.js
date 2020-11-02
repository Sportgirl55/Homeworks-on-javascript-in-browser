'use strict';

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.onreadystatechange = function() {
     if(xhr.readyState === 4 && xhr.status === 200) {
          document.querySelector('#loader').classList.remove('loader_active');
          let responses = JSON.parse(xhr.response);
          for (let item in responses.response.Valute) {
               let newItem = document.createElement('div');
               newItem.classList.add('item');
                    newItem.innerHTML += `
                    <div class="item__code">
                         ${responses.response.Valute[item].CharCode}
                    </div>
                    <div class="item__value">
                         ${responses.response.Valute[item].Value}
                    </div>
                    <div class="item__currency">
                         руб.
                    </div>
                    `; 
                    document.querySelector('#items').appendChild(newItem);   
         }
     };
};