window.onload = function(){
    const images = ['img/Rectangle6.png','img/Rectangle7.png','img/Rectangle8.png'];
    let indexnumber = 0;
    function changeImg(){
        indexnumber+=1;
        if(indexnumber >= images.length){
            indexnumber = 0;
        }
        
        document.querySelector('img').src = images[indexnumber];
    }
    let slideInterval = setInterval(changeImg, 2000);

    let sliderImg = document.querySelector('img');
    sliderImg.addEventListener('mouseover', function(){
        clearInterval(slideInterval);
    });
    sliderImg.addEventListener('mouseout', function(){
        slideInterval = setInterval(changeImg, 2000);
    });
}