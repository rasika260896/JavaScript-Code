/*Smallest number in an array*/
/**
 * Represents a function.
 * @constructor
 * @param {arr} arr - array holding numbers.
 * 
 */

function smallestNumber(arr){
var min = arr[0];
for(var i=0;i<arr.length;i++){
    if(arr[i]<min){
        min = arr[i];
    }
}
return min;
}

var res = smallestNumber([10,5,3,15]);
console.log(res);