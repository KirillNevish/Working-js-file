// 3. addEventListener і removeEventListener

// Створити кнопку і текстовий елемент в якому розмість
//  лічільник: 0, при кліку на кнопку в текстовому значенні
//  повино збільшуватись значення на 1. 
//  Коли значення лічильника перевищує 10,
//  кнопка перестає реагувати на кліки.

window.onload = function(){
    let body = document.querySelector('body');
    let buttonEl = document.createElement('button');
    buttonEl.innerText = 'button'
    body.appendChild(buttonEl);

    let count = 0;

    let pEl = document.createElement('p');
    body.appendChild(pEl);


    buttonEl.addEventListener('click', function(){
    count+=1;
    if(count >10){
    buttonEl.removeEventListener('click');
    }
    pEl.innerHTML = `Counter <strong>${count}</strong>`
});
}