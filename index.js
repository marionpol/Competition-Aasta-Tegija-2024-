document.addEventListener("DOMContentLoaded", function () {
    var logosContainer = document.querySelector('.logos-container');

    function startAnimation() {
        // Move the logos to the left
        logosContainer.style.transform = 'translateX(-100%)';
    }

    startAnimation();

    logosContainer.addEventListener('transitionend', function () {
        // Move the logos instantly to the starting position without noticeable jump
        logosContainer.style.transition = 'none';
        logosContainer.style.transform = 'translateX(0)';
        void logosContainer.offsetWidth; // Trigger reflow
        setTimeout(function () {
            // Restart the animation
            logosContainer.style.transition = 'transform 2s linear'; // Adjust the duration as needed
            startAnimation();
        }, 0);
    });
});