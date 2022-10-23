//Variables
//we first create a variable assigned to window location and insert it into the urlParam.  We then set that value to a variable called wage in the js file.
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const wage = parseFloat(urlParams.get('wage'));
const cps = (wage * 100) / 3600;

const pause_btn = document.getElementById('pause');
const end_btn = document.getElementById('end');
const reset_btn = document.getElementById('reset');
const start_btn = document.getElementById('start');

let OutHour = document.getElementById('hour');
let OutMin = document.getElementById('minute');
let OutSec = document.getElementById('second');
let OutDoll = document.getElementById('dollars');
let OutCent = document.getElementById('cents');

let dollar = 0;
let cent = 00;
let hours = 00;
let minutes = 00;
let seconds = 00;
let interval = null;

//Event Listeners
end_btn.addEventListener("click", () => {
	clearInterval(interval);
	interval = null;
});
pause_btn.addEventListener("click", () => {
	clearInterval(interval);
	interval = null;
});
reset_btn.addEventListener("click", () => {
	clearInterval(interval);
	seconds = 0;
	OutSec.innerHTML = seconds;
});
start_btn.addEventListener("click", () => {
	clearInterval(interval);
	interval = setInterval(timer, 1000);
});

//counting seconds
//here is the clock function and it is called at the end to show the working time. This function is called every 1000 ms so that it portrays a stopwatch 
function timer () {
	seconds++;
	
	if (seconds < 10){
		OutSec.innerHTML = "0" + seconds;
	}
	
	if (seconds > 9){
		OutSec.innerHTML = seconds;
	}
	
	if (seconds > 59){
		minutes++;
		OutMin.innerHTML = "0" + minutes;
		seconds = 0;
		OutSec.innerHTML = "0" + seconds;
	}
	
	if (minutes > 9) {
		OutMin.innerHTML = minutes;
	}
	
	if (minutes > 59) {
		hours++;
		OutHour.innerHTML = "0" + hours;
		minutes = 0;
		OutMin.innerHTML = "0" + minutes;
	}
	
	if (hours > 9) {
		OutHour.innerHTML = hours;
	}
}

//counting dollas
function dollCount (wage) {
	cent = cent + cps;
	let roundCent = Math.round(cent);
	
	if (cent < 10){
		OutCent.innerHTML = "0" + roundCent;
	}
	
	if (cent > 9){
		OutCent.innerHTML = roundCent;
	}
	
	if (cent > 99){
		dollar++;
		OutDoll.innerHTML = dollar;
		cent = cent - 100;
		roundCent = Math.round(cent);
		OutCent.innerHTML = roundCent;
	}
	
	if (roundCent = 0){
		OutCent.innerHTML = "0" + roundCent;
	}
}
clearInterval(interval);
interval = setInterval(timer, 1000);
interval = setInterval(dollCount, 1000);
