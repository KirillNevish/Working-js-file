// 1. onclick
// Задача: Створіть кнопку та елемент Р з текстом,
// при кліку на кнопку текст змінює колір.
//  Можете використати функцію яка генерує різний колір

window.onload = function(){
    let body = document.querySelector('body');
    let buttonEl = document.createElement('button');
    buttonEl.innerText = 'click'
    body.appendChild(buttonEl);

    let pEl = document.createElement('p');
    pEl.innerText = 'Hello'
    pEl.style.color='black';
    body.appendChild(pEl);

    function randomColor(){
        // rgb(231, 226, 226)
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    buttonEl.onclick = function(){
        pEl.style.color= randomColor();
    }
}