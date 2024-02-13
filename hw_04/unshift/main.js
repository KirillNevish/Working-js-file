let unshiftarr = [];
unshiftarr.unshift(1);
unshiftarr.unshift(2);    
unshiftarr.unshift(3);

console.log(unshiftarr)



function unshiftfun(firstArray){
    firstArray = [];
    firstArray.unshift(1, 2, 2);
    console.log(firstArray)
}
unshiftfun()