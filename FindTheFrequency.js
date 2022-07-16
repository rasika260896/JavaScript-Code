/*Finding the frequency of elements in an array*/

function FrequencyOfElemenets(arr){

arr.sort(function(a,b){
    return a-b;
})
console.log(arr);
for(var i=0;i<arr.length;i++){
    var count=1;
    if(i<arr.length-1 && arr[i]===arr[i+1]){
        i++;
        count=count+1;
    }
    console.log(arr[i] +":"+ count)
}

}
FrequencyOfElemenets([2,1,3,4,2,6,7,1]);
