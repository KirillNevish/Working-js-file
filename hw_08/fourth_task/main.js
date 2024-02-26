// 4)Створіть блок за допомогою js задайте блоку стиль
//  display flex та в середині цього блоку створіть 50 div блоків
//   з правилом border-radius, width 50px height 50px та background-color

window.onload = function(){

    let bodyEl = document.querySelector('body');
    
    let mainDiv = document.createElement('div');
    mainDiv.innerHTML = 'Hello JS'; 
    bodyEl.appendChild(mainDiv);

    mainDiv.style.display = 'flex';  

    for(let i=0; i<51; i++){
        let innerDiv = document.createElement('div.inner');
        innerDiv.innerHTML = 'hi';
    
        innerDiv.style.borderRadius = '6px'; 
        innerDiv.style.width = '50px'; 
        innerDiv.style.height = '50px'; 
        innerDiv.style.backgroundColor = 'red';

        mainDiv.appendChild(innerDiv)
    }
}
