const carouselImages = document.querySelectorAll('.carousel img');
const thumbnails = document.querySelectorAll('.thumbnails img');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const leftArrow1 = document.querySelector('.arrow1.left');
const rightArrow1 = document.querySelector('.arrow1.right');
let currentIndex = 0;


function updateCarousel(index) {
    carouselImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselImages.length - 1;
    updateCarousel(currentIndex);
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselImages.length - 1) ? currentIndex + 1 : 0;
    updateCarousel(currentIndex);
});


   leftArrow1.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
    updateCarousel(currentIndex);
});

rightArrow1.addEventListener('click', () => {
    currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
    updateCarousel(currentIndex);
});

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        currentIndex1 = index;
        updateCarousel(currentIndex);
        
    });
});