/*Find Second Smallest Element in an Array*/

function secondSmallest(arr){
arr.sort(function(a,b){
    return a-b;
})
console.log(arr[1])
}

secondSmallest([30,20,80,100])