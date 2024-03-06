// Завдання 'onMouseOver' і 'onMouseOut': 
// Розмістіть зображення на сторінці,та додайте події де при
// наведенні курсору на зображення воно збільшується або підсвічується.
// Коли курсор миші покидає зображення,
// воно повертається до свого початкового розміру або стилю.

window.onload = function(){
    let divEl = document.querySelector('div');
    divEl.addEventListener('mouseover', function(){
        this.style.width = '200px';
        this.style.height = '200px';
    });
    divEl.addEventListener('mouseout', function(){
        this.style.width = '50px';
        this.style.height = '50px';

    });
}