let classsNames = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6', 'slide7', 'slide8'];
let currentSlideIndex = 0;
const totalSlides = classsNames.length;

function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex === totalSlides)
        currentSlideIndex = 0;
    document.querySelector(".image-container div").children[0].className = classsNames[currentSlideIndex];
}

function previousSlide() {
    currentSlideIndex--;
    if (currentSlideIndex === -1)
        currentSlideIndex = totalSlides - 1;
    document.querySelector(".image-container div").children[0].className = classsNames[currentSlideIndex];
}