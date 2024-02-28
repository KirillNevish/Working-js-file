// 2. ondblclick
// Задача: Створіть елемент, який при подвійному кліку
//  збільшує свій розмір в 2 рази ( змінюємо width i height).

window.onload = function(){
    let body = document.querySelector('body');
    let divEl = document.createElement('div');
    divEl.innerText = 'div'
    divEl.style.borderRadius = '40px';
    // divEl.style.width = '100px';
    // divEl.style.height = '100px';
    let baseFontSize = 24;
    divEl.style.textAlign = 'center'
    divEl.style.backgroundColor = 'red';
    body.appendChild(divEl);

    divEl.ondblclick = function(){
        baseFontSize*=2;

        this.style.fontSize = `${baseFontSize}px`;
    }
}