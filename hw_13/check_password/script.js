window.onload = function(){

    let searchRegExp = /[a-zA-Z]{8,20}[!@#$%^&*]{1,2}\d{1}/gi;
    
    console.log(`Is password valid: ${searchRegExp.test('Loremsrrsm!9')}`);
}