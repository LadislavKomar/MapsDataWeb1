const thumbnails = document.querySelectorAll(".thumbnails img");
const leftArrow1 = document.querySelector(".arrow.left");
const rightArrow1 = document.querySelector(".arrow.right");
let currentIndex = 0;

function updateCarousel(index) {
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });
}

leftArrow1.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : thumbnails.length - 1;
  updateCarousel(currentIndex);
});

rightArrow1.addEventListener("click", () => {
  currentIndex = currentIndex < thumbnails.length - 1 ? currentIndex + 1 : 0;
  updateCarousel(currentIndex);
});

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});

function moveSlide(direction) {
  const thumbnails = document.querySelectorAll(".thumbnail");
  currentIndex =
    (currentIndex + direction + thumbnails.length) % thumbnails.length;
  const offset = -currentIndex * (thumbnails[0].clientWidth + 10); // 10 is the margin
  document.querySelector(
    ".thumbnails"
  ).style.transform = `translateX(${offset}px)`;
}

function openPopup(imageSrc) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popupImg.src = imageSrc;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
