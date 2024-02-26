// 3)Створіть в хедері з попереднього завдання
//  А теги з значенням з обєкта name
//   встановленим значенням в href з url.

// const menuData = [
//     { name: 'Головна', url: '/' },
//     { name: 'Про нас', url: '/about' },
//     { name: 'Послуги', url: '/services' },
//     // Додайте ще пункти меню за потреби
// ]

window.onload = function(){

    let bodyEl = document.querySelector('body');
    
    let headerTitle = document.createElement('header');
    headerTitle.innerHTML = 'Hello JS'; 
    
    bodyEl.appendChild(headerTitle);
    
    headerTitle.style.padding = '50px';                                         
    headerTitle.style.backgroundColor='yellow';
    headerTitle.style.textAlign = 'center';

    // let name = ['Головна','Про нас', 'Послуги'];

    // for(let skill of name){

    //     let hrefEl = document.createElement('a');
    //     hrefEl.innerHTML =`${skill}`;
    //     hrefEl.setAttribute('href', '/');
    //     hrefEl.setAttribute('href', '/about');
    //     hrefEl.setAttribute('href', '/service');
    //     headerTitle.appendChild(hrefEl);

    // }

    let namefirst = document.createElement('a');
    namefirst.setAttribute('href', '/');

    namefirst.innerText ='Головна';

    headerTitle.appendChild(namefirst);

    let namesecond = document.createElement('a');
    namesecond.setAttribute('href', '/about');

    namesecond.innerText ='Про нас';

    headerTitle.appendChild(namesecond);

    let namethird = document.createElement('a');
    namethird.setAttribute('href', '/service');

    namethird.innerText ='Послуги';

    headerTitle.appendChild(namethird);
}