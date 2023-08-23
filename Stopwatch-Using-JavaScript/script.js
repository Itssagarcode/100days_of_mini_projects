let [seconds, minuts, hours] = [0, 0, 0];
let timer = null;
let displayTime = document.getElementById("display-time");

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minuts++;
    if (minuts == 60) {
      minuts = 0;
      hours++;
    }
  }
let h = hours < 10 ? "0" + hours : hours;
let m = minuts < 10 ? "0" + minuts : minuts;
let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h +":"+ m +":"+ s;
}

function watchStart(){
    if(timer!== null){
        clearInterval(timer)
    }
   timer = setInterval(stopwatch, 1000)
}
function watchStop(){
    clearInterval(timer)
}
function watchReset(){
    clearInterval(timer);
    [seconds, minuts, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00"
}
