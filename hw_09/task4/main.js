// 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div).
//  Підключіть обробник події onclick до кожного елементу.
// Коли користувач натисне на елемент,
// цей елемент має бути видалений зі сторінки

window.onload = function(){
    let body = document.querySelector('body');
    for(let i=0; i<11; i++){
        let innerDiv = document.createElement('div');
        innerDiv.innerHTML = 'hi';
    
        innerDiv.style.borderRadius = '6px'; 
        innerDiv.style.width = '50px'; 
        innerDiv.style.height = '50px'; 
        innerDiv.style.backgroundColor = 'red';
        body.appendChild(innerDiv)
    }

    let [...alldiv]=document.querySelectorAll('div');
    alldiv.forEach(div=>{
        div.onclick=function(){ 
            this.setAttribute('style','display: none;');
        }
    });
}