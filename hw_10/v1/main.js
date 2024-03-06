window.onload = function(){

const objectEl = document.querySelector('ul');

objectEl.style.display='none';

window.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.ctrlKey) {
        switch(event.key){
            case 'M':
            case 'm':
                objectEl.style.display='inline';
                break;
            case 'K':
            case 'k':
                objectEl.style.display='none';
                break;
        }
    }
});
}