window.onload = function(){
    let selectEl = document.querySelector('select')
    // let firstcountry = document.querySelector('#ukraine')
    // let secondcountry = document.querySelector('#unitedkingdom')
    // let thirdcountry = document.querySelector('#japan')


    selectEl.addEventListener('change', function(){
        let selectedOption = this.value;
        let pEl = document.createElement('p');

        switch(selectedOption) {
            case 'ukraine':
                pEl.innerHTML = '<p>Capital - Kyiv</p>';
                break;
            case 'unitedkingdom':
                pEl.innerHTML = '<p>Capital - London</p>';
                break;
            case 'japan':
                pEl.innerHTML = '<p>Capital - Tokyo</p>';
                break;
            default:
                pEl.innerHTML = '<p>Select country</p>';
        }

        let existingParagraph = document.querySelector('#country-info');
        if(existingParagraph){
            existingParagraph.remove();
        }
        
        pEl.id = 'country-info';
        selectEl.after(pEl);
    });
};
    