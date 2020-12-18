//given a string, the number of different characters in it

function differentSymbolsNaive(str) {
    //  find the amt of different characters.
    
    //turn str into an array,make sure to sort our array alphabetically 
    const strArr = str.split("").sort();
    
    //to hold the letter to compare to each letter in strArr
    let charHolder = null;
    
    //counter to track the diff 
    let count = 0; 
    
    //loop through and compare to charHolder
    for(let i = 0; i < strArr.length; i++){
        const currentChar = strArr[i];
        console.log(currentChar)
        
        if(currentChar !== charHolder){
            //now my current character is my charHolder if it does not equal to it before 
            charHolder = currentChar;
            //increaase my count due to characters previously in charHolder is not the same current character 
            count++;
        }
    }
    
    return count; 
}
