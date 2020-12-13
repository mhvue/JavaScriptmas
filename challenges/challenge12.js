//check string if it is correct time in 24 hour clock
//https://scrimba.com/learn/adventcalendar/-javascript-challenge-valid-time-introduction-cLkq4bSQ

function validTime(str) {
    //  parse the string 
    
    //split string by : so we get hours and min 
    const split = str.split(":");
    
    for(let i = 0; i < split.length; i++){
       const firstVal = parseInt(split[0])
       const secondVal = parseInt(split[1])
       const convertStandardTime = firstVal - 12
       
       
       //checking the hour and minutes compared to standard time
       if(convertStandardTime <= 12 && secondVal <= 59){
           return true;
       }
       else{
           return false;
       }
    }
    
    
}