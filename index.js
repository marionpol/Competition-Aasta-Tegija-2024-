document.addEventListener("DOMContentLoaded", function () {
    const logoContainer = document.querySelector(".sponsor");
    let position = 0;
  
    function moveLogos() {
      position -= 5; // Adjust the speed as needed
      logoContainer.style.transform = `translateX(${position}px)`;
  
      // Repeat the animation
      if (position <= -100 * 7) {
        position = 0;
        logoContainer.style.transition = "none";
        logoContainer.style.transform = `translateX(${position}px)`;
        setTimeout(() => {
          logoContainer.style.transition = "transform 0.5s ease-in-out";
        }, 0);
      }
  
      requestAnimationFrame(moveLogos);
    }
  
    moveLogos();
  });
