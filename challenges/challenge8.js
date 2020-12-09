/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇

//per click, the dice is rolling and showing a random number

//get a random number 
function rollDice(){
    // const randomNum = Math.floor(Math.random()*6+1)
    const randomNum = 3
    console.log(randomNum)
    const dot = document.querySelector(".dot").cloneNode();
    const dot2 = document.querySelector(".dot").cloneNode();
    const dot3 = document.querySelector(".dot").cloneNode();
    const dot4 = document.querySelector(".dot").cloneNode();
    const dot5 = document.querySelector(".dot").cloneNode();

    if(randomNum == 1){
        //show 1 as is 
    }
    
    if(randomNum == 2){
        //show 2
        document.querySelector("div").appendChild(dot)
        //console.log(cloneFor2)
    }
    if(randomNum == 3){
        //show 3
        document.querySelector("div").appendChild(dot)
        document.querySelector("div").appendChild(dot2)

    }
    if(randomNum == 4){
        //show 4
        document.querySelector("div").appendChild(dot)
        document.querySelector("div").appendChild(dot2)
        document.querySelector("div").appendChild(dot3)

    }
    if(randomNum == 5){
        //show 5
         document.querySelector("div").appendChild(dot)
        document.querySelector("div").appendChild(dot2)
        document.querySelector("div").appendChild(dot3)
        document.querySelector("div").appendChild(dot4)

    }
    if(randomNum == 6){
        //show 6
        document.querySelector("div").appendChild(dot)
        document.querySelector("div").appendChild(dot2)
        document.querySelector("div").appendChild(dot3)
        document.querySelector("div").appendChild(dot4)
        document.querySelector("div").appendChild(dot5)

        
    }
  
}

rollDice();


//display the random number working. not my favorite way to write this...need to review.. did not fix their front end to line up with it yet.

