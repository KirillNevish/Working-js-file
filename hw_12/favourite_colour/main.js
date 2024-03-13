window.onload = function(){
    let bodyEl = document.querySelector('body')
    let firstop = document.querySelector('#option1')
    let secondop = document.querySelector('#option2')
    let thirdop = document.querySelector('#option3')

    firstop.addEventListener('change', function(){
        bodyEl.style.background = 'green';
    })
    secondop.addEventListener('change', function(){
        bodyEl.style.background = 'red';
    })
    thirdop.addEventListener('change', function(){
        bodyEl.style.background = 'blue';
    })
}