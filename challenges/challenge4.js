function centuryFromYear(num) {
    //  centruy is 100 years 
    // 1st century is 1 to 100 years 
    // 2nd century is 101 to 200 years  
    //3rd century is 201 to 300 years 

    const getYear = num/100
    
    //once it's 1901 and up = new century 
    //checking for float number
    if(getYear % 1 != 0){ 
        return Math.floor(num/100) + 1 
    }
    else{
        return Math.floor(num/100)
    }
}