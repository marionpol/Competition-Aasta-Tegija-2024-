document.addEventListener("DOMContentLoaded", function () {
    var sponsorSection = document.getElementById('sponsor');
    var logos = document.querySelectorAll('.logod');
    
    // Calculate total width
    var totalWidth = Array.from(logos).reduce((acc, logo) => acc + logo.offsetWidth + parseInt(getComputedStyle(logo).marginRight || 0), 0);
    
    sponsorSection.style.width = '100%';

    function startAnimation() {
        sponsorSection.style.transition = 'none';
        sponsorSection.style.transform = 'translateX(0)';

        // Adjust the duration based on the total width and number of logos
        var animationDuration = totalWidth / 100 + 's';
        
        setTimeout(function () {
            sponsorSection.style.transition = 'transform ' + animationDuration + ' linear';
            sponsorSection.style.transform = 'translateX(-' + totalWidth + 'px)';
        }, 0);
    }

    startAnimation();

    sponsorSection.addEventListener('transitionend', function () {
        sponsorSection.style.transition = 'none';
        sponsorSection.style.transform = 'translateX(0)';
        setTimeout(startAnimation, 0);
    });
});