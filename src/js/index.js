document.addEventListener('DOMContentLoaded', function () {
  initializeSlider('slider1');
  initializeSlider('slider2');
});
function initializeSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  let currentSlide = 0;
  function showSlide(index) {
    const slides = slider.children;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(-${index * 100}%)`;
    }
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slider.children.length;
    showSlide(currentSlide);
  }
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slider.children.length) % slider.children.length;
    showSlide(currentSlide);
  }
  showSlide(currentSlide);
  const nextButton = document.createElement('button');
  nextButton.innerText = 'Next';
  nextButton.addEventListener('click', nextSlide);
  const prevButton = document.createElement('button');
  prevButton.innerText = 'Previous';
  prevButton.addEventListener('click', prevSlide);
  slider.parentElement.appendChild(prevButton);
  slider.parentElement.appendChild(nextButton);
};


window.addEventListener('scroll', function() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const progress = (scrolled / scrollableHeight) * 100;
    updateProgressBar(progress);
});
function updateProgressBar(progress) {
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = progress + '%';
  if (progress === 0 || progress === 100) {
    document.getElementById('progress-container').style.display = 'none';
  } else {
    document.getElementById('progress-container').style.display = 'block';
  }
}


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
function toggleNav() {
  var navLinks = document.querySelector('.nav--links');
  navLinks.classList.toggle('active');
}
function toggleReadMore() {
  const extraText = document.getElementById("extraText");
  if (extraText.classList.contains("hidden")) {
      extraText.classList.remove("hidden");
  } else {
      extraText.classList.add("hidden");
  }
}


const downloadContainer = document.getElementById("downloadContainer");
const downloadLink = document.createElement("a");
downloadLink.href = "images/cv.pdf";
downloadLink.download = "cv.pdf";
const downloadButton = document.createElement("button");
downloadButton.textContent = "Download CV";
downloadLink.appendChild(downloadButton);
downloadContainer.appendChild(downloadLink);


const video = document.getElementById('fullscreenVideo');
video.addEventListener('touchstart', toggleFullScreen);
function toggleFullScreen() {
if (!document.fullscreenElement) {
video.requestFullscreen().catch(err => {
  console.error(`Error attempting to enable full-screen mode: ${err.message}`);
});
} else {
document.exitFullscreen();
}
}
