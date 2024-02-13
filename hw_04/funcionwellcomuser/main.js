function hiUser(){
    for(let i = 0; i<firstArray.length; i++){         
        for(let y=0; y<firstArray[i].length; y++){
            console.log(`Вітаю ${firstArray[i][y]}`);
        }
    }
}

function wellcomeUser(){
    firstArray = [ ['tom', 'john', 'ben', 'alex'] ];
    hiUser()
}
wellcomeUser();
