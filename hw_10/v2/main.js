window.onload = function(){

    const objectEl = document.querySelector('ul');
    
    objectEl.style.display='none';
    
    window.addEventListener('keydown', (event) => {
        console.log(event.key);
            switch(event.key){
                case 'M':
                case 'm':
                    objectEl.style.display='inline';
                    break;
                case 'C':
                case 'c':
                    objectEl.style.display='none';
                    break;
            }
    });

    let lifEl = document.querySelector('.first')
    let lisEl = document.querySelector('.second')
    let litEl = document.querySelector('.third')

    lifEl.addEventListener('mouseover', function(){
        this.style.background = 'green';
    });
    lifEl.addEventListener('mouseout', function(){
        this.style.background = 'blueviolet';
    });
    lisEl.addEventListener('mouseover', function(){
        this.style.background = 'green';
    });
    lisEl.addEventListener('mouseout', function(){
        this.style.background = 'blueviolet';
    });
    litEl.addEventListener('mouseover', function(){
        this.style.background = 'green';
    });
    litEl.addEventListener('mouseout', function(){
        this.style.background = 'blueviolet';
    });

    // const step = 1;
    // function moveEl(el){
    //     el.style.top = `${lifEl}px`;
    //     el.style.down = `${litEl}px`;
    // }

    // objectEl.addEventListener('keydown', (event) => {

    //     switch(event.key){
    //         case 'ArrowUp':
    //             litEl-=step;
    //             break;
    //         case 'ArrowDown':
    //             lifEl+=step;
    //             break;
    //     }
    //     moveEl();
    // });
}