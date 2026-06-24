const timerDisplay = document.getElementById('timerDisplay');
const minutesInput = document.getElementById('minutesInput');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

let countdownInterval;
let totalSeconds = 0;

// Start the timer
startBtn.addEventListener('click', ()=>{
clearInterval(countdownInterval);// If a previous timer is running, stop it.
const minutes = parseInt(minutesInput.value);
if (isNaN(minutes) || minutes < 0){
    alert("Please enter a valid number.");
    return;
}
totalSeconds = minutes * 60;
updateDisplay();
countdownInterval = setInterval(()=>{
    totalSeconds--;
    updateDisplay();
    if(totalSeconds <= 0){
        clearInterval(countdownInterval);
        alert("Time is up!");
    }
},1000);
});

// Reset the timer
resetBtn.addEventListener('click', ()=>{
    clearInterval(countdownInterval);
    totalSeconds = 0;
    updateDisplay();
    minutesInput.value="";
});

// Update the display function
function updateDisplay(){
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

// Display with two digits
timerDisplay.textContent = 
String(hours).padStart(2,'0')+ ':' +
String(minutes).padStart(2, '0')+ ':' +
String(seconds).padStart(2, '0');
}