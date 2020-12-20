
//https://scrimba.com/learn/adventcalendar/-javascript-challenge-alphabet-subsequence-introduction-czbJ4Jt9
function alphabetSubsequence(str) {
    //  check if string characters are in alpabetical order, no repeats
    
    const alphabet = "abcdefghijklmnopqrstuvwyz"
    const split = str.split(""); //put strings characters in array
    
    for(let i = 0; i < alphabet.length; i++){ //alaphabet
        const alphaChar = alphabet[i];
        
        for(let j = 0; j < alphabet.length; j++){ //str
            const strChar = split[j];
            //console.log(strChar)
            if(alphaChar === strChar && strChar != split[j+1]){
                return true;
            }
            else{
                return false;
            }
        }
    }
    
}
