//https://scrimba.com/learn/adventcalendar/-javascript-challenge-adjacent-elements-product-introduction-c8q4NRCE
//given an array of integers, find the pari of adjacent elemnents that has larges produce and return that produce 


function adjacentElementsProduct(nums) {
    //  check val when element at i * element at (i+1) 
    // see which val is bigger 
    
    //large val holder  
    let largestVal = null;

    //loop through to check each val w/ i and i+1
    for(let i = 0; i < nums.length; i++){
        const value  = nums[i];
        const nextVal = nums[i+1];
        
        const addIt = value * nextVal;
        
        if(addIt > largestVal){
            largestVal = addIt
        }
        
        if(nextVal == undefined){
            return largetestVal;
        }
        
    }
    
    return largetestVal;
}