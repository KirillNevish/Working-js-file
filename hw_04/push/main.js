let newArr = [];
let Arr = [1,2,3,4,5,6,7,8];

for(let i=0; i<Arr.length; i++){
    newArr.push(Arr[i]);
} 
console.log(newArr);


let firstArray = [];
let value = [7];

function pushfun(){
    for(let i=0; i<value.length; i++){
        firstArray.push(value[i]);
    }
    console.log(firstArray)
}
pushfun()

