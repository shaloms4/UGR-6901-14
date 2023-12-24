var currentSlide = 0;
    var totalSlides = document.querySelectorAll('#slider .carousel-item').length;
    function showSlide(index) {
        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        document.querySelectorAll('#slider .carousel-item').forEach(function (slide) {
            slide.classList.remove('active');
        });
        document.querySelector('#slider .carousel-item:nth-child(' + (currentSlide + 1) + ')').classList.add('active');
    }
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    
function toggleReadMore() {
  const extraText = document.getElementById("extraText");
  const readMoreButton = document.querySelector('.upper--section__text a');
  if (extraText.classList.contains("collapse")) {
    extraText.classList.remove("collapse");
    readMoreButton.textContent = "Read Less";
  } else {
    extraText.classList.add("collapse");
    readMoreButton.textContent = "Read More";
  }
}


const downloadContainer = document.getElementById("downloadContainer");
const downloadLink = document.createElement("a");
downloadLink.href = "images/cv.pdf";
downloadLink.download = "cv.pdf";
const downloadButton = document.createElement("button");
downloadButton.textContent = "Download CV";
downloadButton.classList.add("btn", "btn-primary");
downloadButton.addEventListener("click", function (event) {
  event.preventDefault();
  downloadLink.click();
});
downloadLink.appendChild(downloadButton);
downloadContainer.appendChild(downloadLink);

