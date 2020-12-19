//https://scrimba.com/learn/adventcalendar/-javascript-challenge-array-previous-less-introduction-co8cd43f5a1ebd5c407f1b3f8

function arrayPreviousLess(nums) {
    //  looking to our value to the left:
    //if SMALLER than current val then return that smaller value
    //if NOT smaller, then return -1 
    const newNumHolder =[];
    for(let i =0; i < nums.length; i++){
        if(nums[i] > nums[i-1]){
            newNumHolder.push(nums[i-1]);
        }
        else{
            newNumHolder.push(-1);
        }
    }
    
    return newNumHolder;
    
}
