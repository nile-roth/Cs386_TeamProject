//Variables
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const wage = parseFloat(urlParams.get('wage'));
const pause_btn = document.getElementById('pause');
const end_btn = document.getElementById('end');
const reset_btn = document.getElementById('reset');
const start_btn = document.getElementById('start');
let OutHour = document.getElementById('hour');
let OutMin = document.getElementById('minute');
let OutSec = document.getElementById('second');
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
clearInterval(interval);
interval = setInterval(timer, 1000);
