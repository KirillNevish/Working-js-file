window.onload = function(){
    let formEl = document.querySelector('.form-item');
    let firstbox = document.querySelector('#checkboxEl1');
    let secondbox = document.querySelector('#checkboxEl2');
    let thirdbox = document.querySelector('#checkboxEl3');

    firstbox.addEventListener('change', function(e){
        if(firstbox.checked){
            let pEl = document.createElement('p');
            pEl.textContent = 'Reading';
            formEl.after(pEl);
        }
        else {
            let paragraphs = formEl.parentElement.querySelectorAll('p');
            paragraphs.forEach(function(paragraph) {
                if (paragraph.textContent === 'Reading') {
                    paragraph.remove();
                }
            });
        }
    });

    secondbox.addEventListener('change', function(e){
        if(secondbox.checked){
            let pEl = document.createElement('p');
            pEl.textContent = 'Sport';
            formEl.after(pEl);
        } 
        else {
            let paragraphs = formEl.parentElement.querySelectorAll('p');
            paragraphs.forEach(function(paragraph) {
                if (paragraph.textContent === 'Sport') {
                    paragraph.remove();
                }
            });
        }
    });

    thirdbox.addEventListener('change', function(e){
        if(thirdbox.checked){
            let pEl = document.createElement('p');
            pEl.textContent = 'Music';
            formEl.after(pEl);
        } 
        else {
            let paragraphs = formEl.parentElement.querySelectorAll('p');
            paragraphs.forEach(function(paragraph) {
                if (paragraph.textContent === 'Music') {
                    paragraph.remove();
                }
            });
        }
    });
};