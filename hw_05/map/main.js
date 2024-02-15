let numberArr = [1,2,3,4];

// let afterMap = numberArr.map((value)=>value*value);
// console.log(afterMap);



let array = [3, 4, 5, 6 ,7];

function afterMap (array, cb){
    let newarray = array.map(value=>cb(value))
    return newarray;
}
let map = afterMap(array, value=>`new value: ${value}`)

console.log(map)