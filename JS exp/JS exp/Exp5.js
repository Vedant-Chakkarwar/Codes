let countdownInterval;
let countdownDate;

// Function to calculate the time difference and display the remaining time
function calculateTimeRemaining(targetDate) {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer').innerHTML = "Time's up!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Start countdown function
function startCountdown() {
    const dateInput = document.getElementById('date-input').value;

    if (!dateInput) {
        alert('Please select a date!');
        return;
    }

    countdownDate = new Date(dateInput).getTime();

    if (countdownDate <= new Date().getTime()) {
        alert('Please select a future date!');
        return;
    }

    clearInterval(countdownInterval); // Reset the interval if already running
    countdownInterval = setInterval(() => {
        calculateTimeRemaining(countdownDate);
    }, 1000);
}

// Stop countdown function
function stopCountdown() {
    clearInterval(countdownInterval);
}

// Reset countdown function
function resetCountdown() {
    clearInterval(countdownInterval);
    document.getElementById('timer').innerHTML = 'Loading...';
    document.getElementById('date-input').value = '';
}

// Event listeners for the buttons
document.getElementById('start').addEventListener('click', startCountdown);
document.getElementById('stop').addEventListener('click', stopCountdown);
document.getElementById('reset').addEventListener('click', resetCountdown);
