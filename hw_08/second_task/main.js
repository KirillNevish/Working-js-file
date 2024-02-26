//2)За допомогою js  створіть на сторінці елемент 
// header  та задайте padding 50px та background-color
// жовтого кольору і властивість text-align center


window.onload = function(){

let bodyEl = document.querySelector('body');

let headerTitle = document.createElement('header');
headerTitle.innerHTML = 'Hello JS'; 

bodyEl.appendChild(headerTitle);

headerTitle.style.padding = '50px';                                         
headerTitle.style.backgroundColor='yellow';
headerTitle.style.textAlign = 'center';
}