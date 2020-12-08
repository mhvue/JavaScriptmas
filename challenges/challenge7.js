//every vowel has val of 1. every consonants have a val of 2. find total for the strings.

function countVowelConsonant(str) {
    // vowels = val of 1
    //consonants have val of 2

    //find vowels and keep track of that
    //find consonants and keep track of that 
    //return total of each 
    
    //trackers
    let vowelTrack= 0;
    let consonantsTrack = 0;

    //loop through to 
    for(let i = 0; i < str.length; i++){
        if(str[i] == "a" ||
           str[i] == "e" ||
           str[i] == "i" ||
           str[i] == "o" ||
           str[i] == "u"){
               vowelTrack ++
           }
        else{
            consonantsTrack++
        }
    }

    return vowelTrack +  consonantsTrack*2;
}