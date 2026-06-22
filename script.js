const timerDisplay = document.getElementById('timerDisplay');
const minutesInput = document.getElementById('minutesInput');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

let countdownInterval;
let totalSeconds = 0;

//شروع تایمر
startBtn.addEventListener('click', ()=>{
clearInterval(countdownInterval);//اگر تایمر قبلی در حال اجرا بود، متوقف شود.
const minutes = parseInt(minutesInput.value);
if (isNaN(minutes) || minutes < 0){
    alert("لطفا یک عدد صحیح وارد کنید.");
    return;
}
totalSeconds = minutes * 60;
updateDisplay();
countdownInterval = setInterval(()=>{
    totalSeconds--;
    updateDisplay();
    if(totalSeconds <= 0){
        clearInterval(countdownInterval);
        alert("زمان به پایان رسید.");
    }
},1000);
});

//ریست تایمر
resetBtn.addEventListener('click', ()=>{
    clearInterval(countdownInterval);
    totalSeconds = 0;
    updateDisplay();
    minutesInput.value="";
});

//تابع به روز رسانی نمایشگر
function updateDisplay(){
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

//نمایش با دو رقم
timerDisplay.textContent = 
String(hours).padStart(2,'0')+ ':' +
String(minutes).padStart(2, '0')+ ':' +
String(seconds).padStart(2, '0');
}