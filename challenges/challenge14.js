function arrayMaximalAdjacentDifference(nums) {
    //have variable to hold for the difference per element value 
    let diffHolder = null;
    
    for(let i = 0; i < nums.length; i++){
        const currentVal = nums[i];
        const nextVal = nums[i+1];
        const subtractVal = currentVal - nextVal;
       
        //if my absolute value when I subtract element i and elment i+1 is more than what is currenlty in diffHolder variable, then replace its val
        if(Math.abs(subtractVal) > diffHolder){
            diffHolder = subtractVal;
        }
    }
    
    return diffHolder;
}

