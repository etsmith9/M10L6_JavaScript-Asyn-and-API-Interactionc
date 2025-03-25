
let countdownInterval;
let repeatingInterval;

// Task 1: Countdown Timer
function startCountdown() {
  const display = document.getElementById("timerDisplay");
  let timeLeft = parseInt(document.getElementById("countdownInput").value);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    display.textContent = "Enter a valid number!";
    return;
  }

  clearInterval(countdownInterval);
  display.textContent = `${timeLeft} seconds remaining`;

  countdownInterval = setInterval(() => {
    timeLeft--;
    display.textContent = `${timeLeft} seconds remaining`;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      display.textContent = "Time's up!";
    }
  }, 1000);
}

// Task 2: Delayed Notification
function startDelayedNotification() {
  const delay = parseInt(document.getElementById("delayInput").value);
  const output = document.getElementById("notifications");

  if (isNaN(delay) || delay <= 0) {
    output.innerHTML += `<p class="notification"> Enter a valid delay!</p>`;
    return;
  }

  const delayInMs = delay * 1000;

  setTimeout(() => {
    output.innerHTML += `<p class="notification">Delayed notification after ${delay} seconds!</p>`;
  }, delayInMs);
}

// Task 3: Repeating Notification
function startRepeatingNotification() {
  const output = document.getElementById("notifications");
  if (repeatingInterval) return;

  repeatingInterval = setInterval(() => {
    output.innerHTML += `<p class="notification"> This is a repeating notification</p>`;
  }, 3000);
}

function stopRepeatingNotification() {
  clearInterval(repeatingInterval);
  repeatingInterval = null;

  document.getElementById("notifications").innerHTML += `<p class="notification">Repeating notifications stopped.</p>`;
}