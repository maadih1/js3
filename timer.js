let timer;
let isRunning = false;
let totalSeconds = 300; // Set the initial time in seconds (e.g., 5 minutes)

function startTimer() {
    if (!isRunning && totalSeconds > 0) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function resetTimer() {
    stopTimer();
    totalSeconds = 300; // Reset the timer to 5 minutes
    updateDisplay();
}

function updateTimer() {
    if (totalSeconds > 0) {
        totalSeconds--;
        updateDisplay();
    } else {
        stopTimer();
        alert("Time's up!"); 
    }
}

function updateDisplay() {
    const display = document.getElementById("display");
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);


updateDisplay();
