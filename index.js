document.addEventListener("DOMContentLoaded", function () {
    const logosContainer = document.getElementById("logod-container");
    const originalLogos = logosContainer.innerHTML; 

    logosContainer.style.animation = "scroll 60s linear infinite";

    for (let i = 0; i < 4; i++) {
        logosContainer.innerHTML += originalLogos;
    }
});