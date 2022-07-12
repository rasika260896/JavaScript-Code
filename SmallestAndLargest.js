/*Smallest number in an array*/
/**
 * Represents a function.
 * @constructor
 * @param {arr} arr - array holding numbers.
 * 
 */

function smallestAndlargest(arr){
arr.sort(function(a,b){
    return a-b;
}
    )
    console.log("The smallest number is",arr[0]);
    console.log("The largest number is",arr[arr.length-1]);


}

smallestAndlargest([10,30,4,15])