// varijable
const btnStart   = document.querySelector('.start');        
const btnStop    = document.querySelector('.stop');
const btnReset   = document.querySelector('.reset');
let outputTens   = document.querySelector('.tens');
let outputSeconds = document.querySelector('.seconds');
let outputMinutes = document.querySelector('.minutes');

let tens = 00;
let seconds = 00;
let minutes = 00;
let interval;

// funkcije
function startTime(){
    tens++
    if(tens <= 9){
        outputTens.innerHTML = '0'+ tens;
    } 
    if (tens >9){
        outputTens.innerHTML = tens;
    }if (tens >99){
        seconds++;
        outputSeconds.innerHTML ="0" + seconds;
        tens = 0;
        outputTens.innerHTML = '0'+ 0;
    }
    if(seconds > 9){
        outputSeconds.innerHTML = seconds;
    }
    if(seconds>59){
        minutes++;
        outputMinutes.innerHTML= "0"+ minutes;
        seconds = 0;
        outputSeconds="0" + 0
    }
    if(minutes > 9){
        outputMinutes.innerHTML = minutes
    }
}
// event listeneri

btnStart.addEventListener('click',() =>{
    clearInterval (interval)
   interval = setInterval(startTime, 10)
})
btnStop.addEventListener('click',() =>{
    clearInterval (interval)
})
btnReset.addEventListener('click',() =>{
    clearInterval (interval)
    minutes =  "00";
    tens = "00";
    seconds ="00";
    outputMinutes.innerHTML= minutes;
    outputSeconds.innerHTML = seconds;
    outputTens.innerHTML = tens;
})
