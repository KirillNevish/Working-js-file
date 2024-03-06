// Завдання 'onContextMenu': 
// Створіть елемент текстовий блок,
// на який при правому кліку миші замість звичайного контекстного меню
// браузера з'являється власне створене контекстне меню.
// Це меню може містити опції, як-от "вирівняти по центру",
// "вирівняти по правому центру", "вирівняти по лівому краю",
// "Приховати елемент"

window.onload = function(){

let divEL = document.querySelector('.first');

let divELsec = document.querySelector('.second');

divELsec.style.display='none';
   
    divEL.addEventListener('contextmenu', function(e){

        e.preventDefault();
        divELsec.style.display='inline';
    });

    let boneEl = document.querySelector('h1');


    boneEl.addEventListener('click', function(){
        // divEL.style.display='flex';
        // divEL.style.justifySelf='center';
        divEL.style.position='absolute';
        divEL.style.left='50%';
    });

  let btwoEl = document.querySelector('h2');  

    btwoEl.addEventListener('click', function(){
        divEL.style.position='absolute';
        divEL.style.right='0%';
     });

    let bthreeEl = document.querySelector('h3');  

    bthreeEl.addEventListener('click', function(){
        divEL.style.position='absolute';
        divEL.style.left='0%';
    });
    
    let bfourEl = document.querySelector('h4');  

    bfourEl.addEventListener('click', function(){
        divEL.style.display='none';
    });
}