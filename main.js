const sliderContainer = document.getElementById('slider-container');
const expertsSlider = document.getElementById('community-content');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const leftArrow2 = document.getElementById('left-arrow2');
const rightArrow2 = document.getElementById('right-arrow2');

rightArrow.addEventListener("click", () => {
    sliderContainer.style.scrollBehavior = "smooth";
    sliderContainer.scrollLeft += 410;
})

leftArrow.addEventListener("click", () => {
    sliderContainer.style.scrollBehavior = "smooth";
    sliderContainer.scrollLeft -= 400;
})
rightArrow2.addEventListener("click", () => {
    expertsSlider.style.scrollBehavior = "smooth";
    expertsSlider.scrollLeft += 285;
})
leftArrow2.addEventListener("click", () => {
    expertsSlider.style.scrollBehavior = "smooth";
    expertsSlider.scrollLeft -= 285;
})