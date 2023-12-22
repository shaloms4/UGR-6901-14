document.addEventListener('DOMContentLoaded', function () {
    initializeSlider('slider1');
    initializeSlider('slider2');
  });

  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * 100 + '%';
    document.querySelector('.slider--content').style.transform = 'translateX(' + translateValue + ')';
  }

  function initializeSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    showSlide(0);
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.addEventListener('click', () => changeSlide(1));
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Previous';
    prevButton.addEventListener('click', () => changeSlide(-1));
    slider.parentElement.appendChild(prevButton);
    slider.parentElement.appendChild(nextButton);
  }

 