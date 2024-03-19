window.onload = function(){

    let searchRegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,20}$/;
    
    console.log(`Is password valid: ${searchRegExp.test('Lorem9ssrrsm!')}`);
    console.log(`Is password valid: ${searchRegExp.test('l%remIPs9uM')}`);
}