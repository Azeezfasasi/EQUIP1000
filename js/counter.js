let timer;
let totalTime = 300; // Total time in seconds (5 minutes)
let timeRemaining = totalTime;

window.onload = function () {
  startTimer();
};

function startTimer() {
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  document.getElementById('hour').innerText = formatTime(hours);
  document.getElementById('minute').innerText = formatTime(minutes);
  document.getElementById('second').innerText = formatTime(seconds);

  if (timeRemaining > 0) {
    timeRemaining--;
  } else {
    clearInterval(timer);
    alert('Assessment time is over!');
    resetTimer();
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  timeRemaining = totalTime;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';

}

