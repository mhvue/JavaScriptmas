// DESCRIPTION:
// We are making a Social Media Character Counter! We want to display the available characters LEFT.
// Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.
//https://scrimba.com/learn/adventcalendar/-javascript-challenge-social-media-input-crqLDVud

let count = 140;
let countHolder;

//event listener is key down
document.onkeydown = function(event){
    const letter = event.key;

    
    //update counterfooter here
    countHolder = count--;
   document.getElementById("counterFooter").innerHTML = countHolder +"/" +140;
    
    //if pressed delete or backspace, increase count instead 
    if(letter == "Backspace" || letter == "Delete"){
        countHolder = count++;
        document.getElementById("counterFooter").innerHTML = countHolder +"/" +140;
    }
    //each 20 and below, we want them to turn red.
    else if(count <= 20){
        document.getElementById("string").style.color = "red";
    }
   // drop below 0, we want the button to be disabled
   else if(count < 0){
       //add class name to make button disabled ...not working yet
       document.getElementById("btn").className = "buttonDisabled";
   }
   
}
