document.addEventListener('DOMContentLoaded', function () {
    // Target date
    const targetDate = new Date('2025-03-01T00:00:00');

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        if (timeDifference > 0) {
            const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
            const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            updateUnit('weeks', weeks);
            updateUnit('days', days);
            updateUnit('hours', hours);
            updateUnit('minutes', minutes);
            updateUnit('seconds', seconds);
        } else {
            document.getElementById('countdown').innerHTML = 'Countdown expired';
        }
    }

    function updateUnit(unitId, value) {
        const unitElement = document.getElementById(unitId);
        unitElement.textContent = value;
        unitElement.style.opacity = 1;
        unitElement.style.transform = 'scale(1)';
    }

    // Initial call
    updateCountdown();

    // Update every second
    setInterval(updateCountdown, 1000);
});
