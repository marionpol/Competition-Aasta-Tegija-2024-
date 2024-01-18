function scrollTextBlock(day, direction) {
  var textBlock = document.getElementById(day);
  var scrollAmount = 50;

  if (direction === 'up') {
    textBlock.scrollTop -= scrollAmount;
  } else if (direction === 'down') {
    textBlock.scrollTop += scrollAmount;
  }
}

function showSchedule(day) {
  var textBlocks = document.querySelectorAll('.text-blocks');
  textBlocks.forEach(function (block) {
    block.classList.remove('expand', 'enable-scroll');
  });

  var selectedBlock = document.getElementById(day);
  if (selectedBlock) {
    selectedBlock.classList.add('expand');
    if (day !== 'day1') {
      selectedBlock.classList.add('enable-scroll');
    }
  }
  else {
    // If the selected day doesn't exist, hide the scroll bar
    textBlocks.forEach(function (block) {
      block.classList.remove('enable-scroll');
    });
  }
}

document.getElementById('day1').addEventListener('click', function () {
  showSchedule('day1');
});

document.getElementById('day2').addEventListener('click', function () {
  showSchedule('day2');
});

document.getElementById('day3').addEventListener('click', function () {
  showSchedule('day3');
});



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

  logosContainer.style.backgroundColor = "white";

  logosContainer.style.minHeight = "10vh";

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