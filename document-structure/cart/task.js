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
                    console.log(product.dataset.id)
                     let cartProductCount = product.querySelector('.cart__product-count').textContent;
                     let totalCount = Number(cartProductCount) + Number(quantity[i].textContent);
                     console.log(totalCount);
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

// let quantity = document.getElementsByClassName('product__quantity-value');
// let controlInc = document.getElementsByClassName('product__quantity-control_inc');
// let controlDec = document.getElementsByClassName('product__quantity-control_dec');

// for (let i = 0; i < quantity.length; i++) {

//     controlInc[i].addEventListener('click', () => {
//         quantity[i].textContent++;
//     })
//     controlDec[i].addEventListener('click', () => {
//         quantity[i].textContent--;

//         if (quantity[i].textContent < '1') {
//             quantity[i].textContent = '1'
//         }
//     });

//     let add = document.getElementsByClassName('product__add');

//     add[i].addEventListener('click', () => {

//         if (quantity[i].textContent === '0') {
//             return;
//         }
//         let cartProducts = document.querySelector('.cart__products');
//         let product = document.getElementsByClassName('product');

//         for (let j = 0; j < cartProducts.children.length; j++) {
//             if (cartProducts.children[j].dataset.id === product[i].dataset.id) {
//                 let cartProductsCount = cartProducts.children[j].querySelector('.cart__product-count').textContent;
//                 let newProductValue = Number(cartProductsCount) + Number(quantity[j].textContent);

//                 return cartProducts.children[j].querySelector('.cart__product-count').textContent = newProductValue;
//             }
//         }

//         cartProducts.insertAdjacentHTML('beforeend', `
//             <div class="cart__product" data-id="${product[i].dataset.id}">
//                 <img class="cart__product-image" src="${product[i].querySelector('img').getAttribute('src')}">
//                 <div class="cart__product-count">${quantity[i].textContent}</div>
//             </div>
//             `);
//     })
// };




//     if (event.target == product.querySelector('.product__add')) {
//      if(cart.childElementCount > 0) {
//           if(cart.querySelector(`[data-id="${targetId}"]`).dataset.id == targetId) {
//                console.log(cart.querySelector(`[data-id="${targetId}"]`).dataset.id);
//                console.log(targetId);

//           } else {
//                let newItem = document.createElement('div');
//                newItem.classList.add('cart__product');
//                cart.appendChild(newItem);
//                newItem.innerHTML += newProduct;
//                newItem.setAttribute('data-id', targetId);
//                newItem.querySelector('.cart__product-image').setAttribute('src', product.querySelector('img').getAttribute('src'));
//                newItem.querySelector('.cart__product-count').innerText = counter;
//           }    
//      } else {
//           let newItem = document.createElement('div');
//                newItem.classList.add('cart__product');
//                cart.appendChild(newItem);
//                newItem.innerHTML += newProduct;
//                newItem.setAttribute('data-id', targetId);
//                newItem.querySelector('.cart__product-image').setAttribute('src', product.querySelector('img').getAttribute('src'));
//                newItem.querySelector('.cart__product-count').innerText = counter;
           
// } 
          
        
// } 
