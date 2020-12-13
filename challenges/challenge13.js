//given an array of numbers, remove the each kth element from it 
//https://scrimba.com/learn/adventcalendar/-javascript-challenge-extract-each-kth-introduction-ce96GEHP

function extractEachKth(nums, index) {
    // index will be determine val in array that are multiples of it 
    
    //filter through to see what is divisible by index 
    const newArr =  nums.filter(function(elm){
       if(elm % index != 0){
           return elm;
       }
   })

return newArr;    
}
