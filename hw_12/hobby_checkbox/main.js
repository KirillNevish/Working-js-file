window.onload = function(){
    let formEl = document.querySelector('.form-item')
    let firstbox = document.querySelector('#checkboxEl1')
    let secondbox = document.querySelector('#checkboxEl2')
    let thirdbox = document.querySelector('#checkboxEl3')

    firstbox.addEventListener('change', function(e){
        if(firstbox.checked){
            e.preventDefault();
            let pEl = document.createElement('p')
            pEl.innerHTML = `
            <p>Reading</p>`;
            formEl.after(pEl);
        }
        else{
            
        }
    })
    secondbox.addEventListener('change', function(e){
        if(secondbox.checked){
            e.preventDefault();
            let pEl = document.createElement('p')
            pEl.innerHTML = `
            <p>Sport</p>`;
            formEl.after(pEl);
        }
        else{

        }
    })
    thirdbox.addEventListener('change', function(e){
        if(thirdbox.checked){
            e.preventDefault();
        let pEl = document.createElement('p')
        pEl.innerHTML = `
        <p>Music</p>`;
        formEl.after(pEl);
        }
        else{
            
        }
    })
}