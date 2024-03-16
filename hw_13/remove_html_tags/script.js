// Створити регулярний вираз, який видаляє всі HTML теги з рядка.
// Наприклад, після обробки рядка <p>Це - простий <b>текст</b>.</p>
//  має залишитися Це - простий текст.

window.onload = function(){
    let htmlString = "<p>Це - простий <b>текст</b>.</p>";
    let resultText = htmlString.replace(/<[^>]*>/gi, '');
    console.log(resultText);
}
