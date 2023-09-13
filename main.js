//----------- slider logic
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slideWidth = 20; // Width of each slide in percentage
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex >= 0) {
        currentIndex--;
        updateSlider();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slider.children.length - 2) {
        currentIndex++;
        updateSlider();
    }
});

function updateSlider() {
    // Remove the 'center' class from all slides
    document.querySelectorAll('.slide').forEach((slide) => {
        slide.classList.remove('center');
    });

    // Add the 'center' class to the current center slide
    slider.children[currentIndex + 1].classList.add('center');

    const translateValue = currentIndex * -slideWidth;
    slider.style.transform = `translateX(${translateValue}%)`;
}

updateSlider();

//----------------
const smallImages = document.querySelectorAll('.small-image');
const bigImage = document.getElementById('bigImage');


smallImages.forEach((smallImage) => {
    smallImage.addEventListener('click', () => {

        smallImages.forEach((image) => {
            image.classList.remove('selected');
        });

        bigImage.src = smallImage.src;

        smallImage.classList.add('selected');
    });
});