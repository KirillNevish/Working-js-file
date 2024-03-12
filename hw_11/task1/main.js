window.onload = function(){
    let formEl = document.querySelector('form');
    let UAHinputEl = document.querySelector('#userUAHValue');
    let USDinputEl = document.querySelector('#userUSDValue');

    function checkValue(){
        if(UAHinputEl.value === ''){
            alert('Type Value');
        }
        else if(USDinputEl.value === ''){
            alert('Type Value');
        }
    }

    [...formElements]=formEl.elements

    formEl.addEventListener('submit', function(e){ 
        e.preventDefault();
            let pEl = document.createElement('p')
            pEl.innerHTML = `
            <p>UAH Value in USD: ${UAHinputEl.value/35}</p>
            <p>USD Value in UAH: ${USDinputEl.value*35}</p>
        `;
            formEl.after(pEl);
    })

    formEl.addEventListener('submit', function(e){
        e.preventDefault();
        checkValue();
        UAHinputEl.value ='';
        USDinputEl.value ='';
    });
}
