let userNumber = Number(prompt('Chose number'));

if(userNumber <=100 && userNumber >=1){
    console.log(`Число в діапазон ${userNumber<=100}`);
}
else if(userNumber){
    console.log(`Число поза діапазоном`);
}