function insertDashes(arr) {
    const dash = "-";
    const newArr = [];
    const split = arr.split(" ");
    
    for(let i =0; i < split.length; i++){
        //this loops gives us each word  
        const word = split[i]
        for(let j = 0; j < split[i].length; j++){ //loop through letters in each word 
            const letter = split[i][j]
            const lastValIndex = split[i].length-1
            //console.log(lastValIndex)
            
            //add dash after each letter
            if(j < lastValIndex){
                newArr.push(letter,dash)
            }
            else{
              //don't add dash
                newArr.push(letter," ")
            }
        }
        
    }

      newArr.pop(); //removing that extra space 
      return newArr.join("");
}

//this is not the best soluton but it works (yay!)