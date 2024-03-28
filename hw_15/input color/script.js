window.onload = function(){
    let bodyEl = document.querySelector('body');
    let formEl = document.querySelector('.form-item');
    let saveButton = document.querySelector('#save-button');

    let savedColor = localStorage.getItem('backgroundColor');
    if(savedColor) {
        bodyEl.style.background = savedColor;
    }

    formEl.addEventListener('change', function(event){
        let selectedOption = document.querySelector('input[name="color-option"]:checked');
        if (selectedOption) {
            let selectedColor = selectedOption.value;
            bodyEl.style.background = selectedColor;
        }
    });

    saveButton.addEventListener('click', function(){
        let selectedOption = document.querySelector('input[name="color-option"]:checked');
        if (selectedOption) {
            let uniqueIdentifier = selectedOption.id + '_' + new Date().getTime();
            localStorage.setItem('backgroundColor', selectedOption.value);
            alert('Selected option saved to localStorage!');
        } else {
            alert('Please select an option before saving!');
        }
    });
}