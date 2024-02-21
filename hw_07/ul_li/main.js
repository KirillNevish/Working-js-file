window.onload = function(){
    let firstEl = document.querySelector('li:first-child');
    let lastEl = document.querySelector('li:last-child');
    console.log(firstEl)
    console.log(lastEl)
    let thirdEl = document.querySelector('li:nth-child(3)');
    console.log(thirdEl)
    let ALLli = document.querySelectorAll('li')
    console.log(ALLli)
    let [...ALLliarr] = document.querySelectorAll('li');
    console.log(ALLliarr)
}