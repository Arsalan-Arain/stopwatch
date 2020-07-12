var min = 0;
var sec = 0;
var ms = 0;
var timerRecord = [];

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msHeading = document.getElementById("ms");

var interval;

function timer(){
    ms++;
    if(ms<10){msHeading.innerHTML = "0"+ms;}
    else{msHeading.innerHTML = ms;}
    
    if(ms >= 99){
        sec++;
        if(sec<10){secHeading.innerHTML  ="0"+ sec;}
        else{secHeading.innerHTML  = sec;}
        ms = 0;
    }
    else if(sec >= 59){
        min++;
        if(min<10){minHeading.innerHTML  ="0"+ min;}
        else{minHeading.innerHTML  = min;}
        sec=0;
        minHeading.innerHTML = min;
        
    }
}

function start(){
    disableBtn()
    interval = setInterval(timer, 10)
}
function pause(){
    clearInterval(interval)
    enableBtn()
}
function reset(){
    timerRecord.push(min+":"+sec+":"+ms);
    min = "00";
    sec = "00";
    ms = "00";
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msHeading.innerHTML = ms;
    pause()
    enableBtn()
    
}
function disableBtn(){
    var btn = document.getElementById("startBtn");
    btn.disabled = true;
}
function enableBtn(){
    var btn = document.getElementById("startBtn");
    btn.disabled = false;
}

