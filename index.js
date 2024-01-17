function showSchedule(day) {
    var textBlocks = document.querySelectorAll('.text-blocks');
    textBlocks.forEach(function(block) {
      block.classList.remove('active');
    });

    var selectedBlock = document.getElementById(day);
    if (selectedBlock) {
      selectedBlock.classList.add('active');
    }
  }

function changeIcon(button, paragraphId) {
    var allButtons = document.querySelectorAll('.arrow-btn');
    allButtons.forEach(function (btn) {
        var icon = btn.querySelector('i');
        icon.classList.remove('fa-arrow-down');
        icon.classList.add('fa-arrow-left');
    });

    var icon = button.querySelector('i');
    icon.classList.toggle('fa-arrow-left');
    icon.classList.toggle('fa-arrow-down');

    var paragraphs = document.querySelectorAll('.about-content');
    paragraphs.forEach(function (paragraph) {
        paragraph.classList.remove('active');
    });

    var activeParagraphId = button.getAttribute('data-paragraph');
    var activeParagraph = document.getElementById(activeParagraphId);
    activeParagraph.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const logosContainer = document.getElementById("logod-container");
    const originalLogos = logosContainer.innerHTML; 

    logosContainer.style.animation = "scroll 60s linear infinite";

    for (let i = 0; i < 4; i++) {
        logosContainer.innerHTML += originalLogos;
    }
});

// Nav bar background fade in and out
document.addEventListener("DOMContentLoaded", function () {
    var nav = document.getElementById("navigation");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        nav.classList.add("nav-scroll");
      } else {
        nav.classList.remove("nav-scroll");
      }
    });
  });