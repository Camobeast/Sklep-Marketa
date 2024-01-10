let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

document.querySelector('.prev').addEventListener('click', function() {
  moveToSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', function() {
  moveToSlide(currentIndex + 1);
});

function moveToSlide(index) {
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }

  slides[currentIndex].style.display = 'none';
  slides[index].style.display = 'block';
  currentIndex = index;
}

// Initialize the carousel
moveToSlide(currentIndex);
