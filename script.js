// Function to update the clock every second
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zero if single digit
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Format time as HH:MM:SS
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Update the clock element
  document.getElementById('clock').textContent = timeString;
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();
