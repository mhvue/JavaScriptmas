//https://scrimba.com/learn/adventcalendar/cNDr7NUB?utm_source=newsletter&utm_medium=email&utm_campaign=javascriptmas_day4&purge=true

//give the year, output the century 

function centuryFromYear(num) {
    //  centruy is 100 years 
    // 1st century is 1 to 100 years 
    // 2nd century is 101 to 200 years  
    //3rd century is 201 to 300 years 

    const getCentury = num/100
    
    //once it's 1901 and up = new century 
    //checking for float number
    if(getCentury % 1 != 0){ 
        return Math.floor(num/100) + 1 
    }
    else{
        return Math.floor(num/100)
    }
}