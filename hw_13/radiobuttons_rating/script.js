window.onload = function(){
    let formEl = document.querySelector('.form-item')
    let [...allRadio] = document.querySelectorAll('input[type="radio"]');

    formEl.addEventListener('change', function(){
        for(let radio of allRadio){
            if(radio.checked){
                console.log('дякуэмо за вiдгук!');
            }
        }
})
}