//https://scrimba.com/learn/adventcalendar/-javascript-challenge-chunky-monkey-introduction-cLkqvyAR?utm_source=newsletter&utm_medium=email&utm_campaign=javascriptmas_day3&purge=true
function chunkyMonkey(values, size) {
    //  break the array per the size 
    //size is the length 
    const newArr =[]
    const restArr = []
    const finalArr =[]
    
    for(let i = 0; i < values.length; i++){
        if(newArr.length != size){
            newArr.push(values[i])
        }
        else{
            restArr.push(values[i])
        }
        
    }
    
    finalArr.push(newArr, restArr);
    return finalArr;
    
}

//not the best but works for now. need to refractor using .slice() as hinted