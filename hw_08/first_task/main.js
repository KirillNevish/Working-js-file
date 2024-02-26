// 1)пройдіть по масиву і зробіть заповнення таблиці даними з масива

window.onload = function(){
    const booksArray = [
        {
            title: 'Пригоди Аліси в Країні Див',
            year: 1865,
            rating: 4.5
        },
        {
            title: '1984',
            year: 1949,
            rating: 4.8
        },
        {
            title: 'Гаррі Поттер і філософський камінь',
            year: 1997,
            rating: 4.7
        }
    ];

    let tableThead = document.querySelector('thead');
    function thEl(content){
        let th = document.createElement('th');
        th.innerText = content;
        return th;
    }
    booksArray.forEach(book=>{
        let trEl = document.createElement('tr');
        for (let key in book){
            trEl.appendChild(thEl(book[key]));
        }
        tableThead.appendChild(trEl);
    });
}