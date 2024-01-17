document.addEventListener("DOMContentLoaded", function() {
    var sponsorSection = document.getElementById('sponsor');
    var logos = document.querySelectorAll('.logo');
    var logosWidth = logos[0].offsetWidth + parseInt(getComputedStyle(logos[0]).marginRight);
    var logosCount = logos.length;

    sponsorSection.style.width = (logosCount * logosWidth) + 'px';

    function startAnimation() {
        sponsorSection.style.transition = 'none';
        sponsorSection.style.transform = 'translateX(0)';

        setTimeout(function() {
            sponsorSection.style.transition = 'transform 10s linear';
            sponsorSection.style.transform = 'translateX(-' + logosWidth + 'px)';
        }, 0);
    }

    startAnimation();

    sponsorSection.addEventListener('transitionend', function() {
        sponsorSection.style.transition = 'none';
        sponsorSection.style.transform = 'translateX(0)';
        setTimeout(startAnimation, 0);
    });
});