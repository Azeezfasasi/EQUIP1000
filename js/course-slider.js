const slider = document.querySelector('.slider');
const pages = document.querySelectorAll('.page');

let currentIndex = 0;

function slideTo(index) {
  if (index < 0 || index >= pages.length) return;
  slider.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

// Example: Slide to next page
function slideNext() {
  slideTo(currentIndex + 1);
}

// Example: Slide to previous page
function slidePrevious() {
  slideTo(currentIndex - 1);
}

// Example: Slide to specific page, e.g., 2nd page
slideTo(1);
