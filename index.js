const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1){
        slidePosition = 0;
        for (let i = 0; i < slides.length;i++){
            slides[i].classList.remove("carousel-item-visible")
        }
        slides[slidePosition].classList.add("carousel-item-visible")
    } else {
        slidePosition++;
        for (let i = 0; i < slides.length;i++){
            slides[i].classList.remove("carousel-item-visible")
        }
        slides[slidePosition].classList.add("carousel-item-visible")
    }
}

function moveToPrevSlide() {
    if (slidePosition === 0){
        slidePosition = slides.length - 1;
        for (let i = 0; i < slides.length;i++){
            slides[i].classList.remove("carousel-item-visible")
        }
        slides[slidePosition].classList.add("carousel-item-visible")
    } else {
        slidePosition--;
        for (let i = 0; i < slides.length;i++){
            slides[i].classList.remove("carousel-item-visible")
        }
        slides[slidePosition].classList.add("carousel-item-visible")
    }
}
