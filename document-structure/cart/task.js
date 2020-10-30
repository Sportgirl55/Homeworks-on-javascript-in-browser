'use strict';

let productButtons = Array.from(document.querySelectorAll('.product'));
let cart = document.querySelector('.cart__products');
let productsInCart = cart.children;
let addButtons = document.getElementsByClassName('product__add');
let quantity = document.querySelectorAll('.product__quantity-value');

for (let i = 0; i < addButtons.length; i++) { 
     productButtons[i].querySelector('.product__quantity-control_inc').addEventListener('click', function() {
          quantity[i].innerText++;
     })
     productButtons[i].querySelector('.product__quantity-control_dec').addEventListener('click', function() {
          quantity[i].innerText > 1 ? quantity[i].innerText-- : quantity[i].innerText = 1;
     })
     addButtons[i].addEventListener('click', function ()  {
          for (let product of productsInCart) {
               if (product.dataset.id == productButtons[i].dataset.id) {
                    let cartProductCount = product.querySelector('.cart__product-count').textContent;
                    let totalCount = +cartProductCount + +quantity[i].textContent;
                    return product.querySelector('.cart__product-count').textContent = totalCount;
                }
          }
          cart.insertAdjacentHTML('beforeend', `
                            <div class="cart__product" data-id="${productButtons[i].dataset.id}">
                                <img class="cart__product-image" src="${productButtons[i].querySelector('img').getAttribute('src')}">
                                <div class="cart__product-count">${quantity[i].innerText}</div>
                            </div>
                            `);    
     })
}