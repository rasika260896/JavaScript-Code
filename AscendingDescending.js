/* Sort first half in ascending order and second half in descending */

function AscendingDescending(arr){
 var avg;
var avg = arr.length/2
console.log(avg);
arr.sort(function(a,b){
    return a-b;
})

for(var i=0;i<avg;i++){
   
    console.log(arr[i] + " "); 
}

for(var i=arr.length-1;i>=avg;i--){
   
    console.log(arr[i] + " "); 
}
}

AscendingDescending([20,40,30,10]);