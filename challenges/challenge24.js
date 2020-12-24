//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS


//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number
var count = 0;
var increase= function(){
    count++;
  spinningElem.innerHTML = count;
}
    

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);


//When the stop button is pushed
function buttonPressed(){
    pushed = true;
    stop(count)
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}



//EDIT THIS FUNCTION
const spin = async () => {
     setInterval(increase,1000)
    await sleep(75) //Paste this wherever you need to sleep the incrimentor 

}

//EDIT THIS FUNCTION
function stop(i){
    //clearInterval
    var result = document.getElementById('result'); //display your result message here
    clearInterval(spin)
    result.innerHTML = count;
}


//main
setTargetInt();
spin()



//clearInterval not working...need to keep working on it