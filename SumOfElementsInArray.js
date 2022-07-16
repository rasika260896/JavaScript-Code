/*Calculate the sum of elements in an array*/

function SumOfElements(arr){
var sum = 0;
for(var i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
console.log(sum);
}

SumOfElements([2,6,10,7]);

/*Reverse an array*/

function ReverseArray(arr){
console.log(arr.reverse());
}

ReverseArray([5,10,20,9])