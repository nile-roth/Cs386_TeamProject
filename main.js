//Variables
const time_num = document.querySelector('.watch .time');
const wage_num = document.querySelector('.watch .wage');
const pause_btn = document.getElementById("pause");
const end_btn = document.getElementById("end");
const reset_btn = document.getElementById("Reset");
const start_btn = document.getElementById("start");
const wage = document.getElementById("wage").value;

let seconds = 0;
let interval = null;
let cps = (wage * 100) / 3600;

//Event Listeners
pause_btn.addEventListener("click", pause);
reset_btn.addEventListener("click", reset);

//counting seconds
function timer () {
	seconds++;
	
	let hrs = Math.floor( seconds / 3600 );
	let mins = Math.floor( (seconds - (hrs * 3600)) / 60 );
	let secs = seconds % 60;

	if (secs < 10) secs = "0" + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;
	
	time_num.innerText = '${hrs}:${mins}:${secs}';
}

//counting income
function wage () {
	seconds++;
	
	let secs = seconds % 60;
	let cents = secs * cps ;
	
	if (cents >= 100) {
		dols++;
		cents = 0;
	}
	wage_num.innerText = '${dols}.${cents}';
	
}

//stop timers
function pause () {
	clearInterval(interval);
	interval = null;
}

//reset timer
function reset () {
	pause();
	seconds = 0;
	time_num.innerText = "00:00:00";
}

//count money
function money_count ()
{
	seconds ++;
	
	let cents = seconds 
	if (secs < 10) secs = "0" + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;
	
	time_num.innerText = '${hrs}:${mins}:${secs}';
}

//start button
function start () {
	if (interval) {
		return
	}
	interval = setInterval(timer,500);
}
