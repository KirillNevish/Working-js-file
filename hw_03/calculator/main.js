let a = 1;
let b = 2;

function summ(firstNumber, secondNumber){
    if(firstNumber === 0){
        
    }
    else if(secondNumber === 0){
        alert('warning! you cant use 0')
    }
    console.log(`Summ ${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}`);
}


summ(a, b);
summ(10, 20);            
summ(true, '20');
summ(true, false);


let userFirstNumber = Number(prompt('Type number'));
let userSecondNumber = Number(prompt('Type number'));

function minus(firstNumberMinus, secondNumberMinus){
    if(firstNumberMinus === 0){
        alert('warning! you cant use 0')
    }
    else if(secondNumberMinus === 0){
        alert('warning! you cant use 0')
    }
    console.log(`Minus ${firstNumberMinus} - ${secondNumberMinus} = ${firstNumberMinus-secondNumberMinus}`);
}

function divide(firstNumberDivide, secondNumberDivide){
    if(firstNumberDivide === 0){
        alert('warning! you cant use 0')
    }
    else if(secondNumberDivide === 0){
        alert('warning! you cant use 0')
    }
    console.log(`Divide ${firstNumberDivide} / ${secondNumberDivide} = ${firstNumberDivide/secondNumberDivide}`);
}

function multiplitaciton(firstNumberMult, secondNumberMult){
    if(firstNumberMult === 0){
        alert('warning! you cant use 0')
    }
    else if(secondNumberMult === 0){
        alert('warning! you cant use 0')
    }
    console.log(`Multiplication ${firstNumberMult} * ${secondNumberMult} = ${firstNumberMult*secondNumberMult}`);
}

let userOperation = prompt('User chose operation +-/*%');
switch (userOperation) {
    case '+':
        summ(userFirstNumber, userSecondNumber); 
        break;
    case '-':
        minus(userFirstNumber, userSecondNumber);
        break;
    case '/':
        divide(userFirstNumber, userSecondNumber); 
        break;
    case '*':
        multiplitaciton(userFirstNumber, userSecondNumber); 
        break;
    default:
        console.log('No information');
        break;
}