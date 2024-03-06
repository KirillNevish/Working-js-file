// Завдання 'keyup': Створіть ігрове поле,
// де користувач може переміщати об'єкт (наприклад, квадрат або коло)
// за допомогою клавіш стрілок. Рух об'єкта повинен зупинятися,
// коли клавіша відпущена

window.onload = function(){

    const player = document.getElementById('object');

    let posX= 0;
    let posY = 0;
    const step = 10;
    function moveEl(el){
        el.style.top = `${posY}px`;
        el.style.left = `${posX}px`;
    }

    window.addEventListener('keydown', (event) => {

        switch(event.key){
            case 'ArrowUp':
                posY-=step;
                break;
            case 'ArrowDown':
                posY+=step;
                break;
            case 'ArrowLeft':
                posX-=step;
                break;
            case 'ArrowRight':
                posX +=step;
                break;
        }
        moveEl(player);
    });
}