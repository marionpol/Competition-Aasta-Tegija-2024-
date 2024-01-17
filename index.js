document.addEventListener("DOMContentLoaded", function () {
    var sponsorSection = document.getElementById('sponsor');
    var logos = document.querySelectorAll('.logod');

    function calculateTotalWidth() {
        return Array.from(logos).reduce((acc, logo) => acc + logo.offsetWidth + parseInt(getComputedStyle(logo).marginRight || 0), 0);
    }

    function updateSponsorWidth() {
        var totalWidth = calculateTotalWidth();
        sponsorSection.style.width = totalWidth * 2 + 'px'; // Double the width to create a continuous loop
    }

    function startAnimation() {
        sponsorSection.style.transition = 'none';
        sponsorSection.style.transform = 'translateX(0)';

        var animationDuration = calculateTotalWidth() / 100 + 's';

        setTimeout(function () {
            sponsorSection.style.transition = 'transform ' + animationDuration + ' linear';
            sponsorSection.style.transform = 'translateX(-' + calculateTotalWidth() + 'px)';
        }, 0);
    }

    updateSponsorWidth();
    startAnimation();

    sponsorSection.addEventListener('transitionend', function () {
        sponsorSection.style.transition = 'none';
        sponsorSection.style.transform = 'translateX(0)';
        updateSponsorWidth();
        setTimeout(startAnimation, 0);
    });
});