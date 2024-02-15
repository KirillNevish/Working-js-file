let numberArr = [10,20,30, 20, 10]

function filter(array){
    let Value = [];
    array.forEach(value=>{
        if(!Value.includes(value)){
            Value.push(value)
        }
    })
    return(Value)
}
console.log(filter(numberArr));