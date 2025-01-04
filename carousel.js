/*
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
*/
function openPopup(imageSrc) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popupImg.src = imageSrc;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

const wrapper = document.querySelector(".thumbnails");
const container = document.querySelector(".imageThumbnails");
const children = wrapper.querySelectorAll(".child");
const leftArr = document.querySelector(".left-arrow");
const rightArr = document.querySelector(".right-arrow");

let counter = 0;
let infiniteCounter = 0;

container.addEventListener("click", function (e) {
  wrapper.style.transition = ".5s ease all";
  if (e.target.classList.contains("left-arrow")) {
    infiniteCounter = -1;
    counter += 20;
    wrapper.style.transform = `translateX(${counter}%)`;
    wrapper.style.transform = `translateX(0%)`;
    wrapper.prepend(wrapper.lastElementChild);
  }

  if (e.target.classList.contains("right-arrow")) {
    infiniteCounter = 1;
    counter -= 20;
    wrapper.style.transform = `translateX(${counter}%)`;
    wrapper.appendChild(wrapper.firstElementChild);
    wrapper.style.transform = `translateX(0%)`;
  }
});

let infiniteCarousel = function () {
  wrapper.style.transition = "none";
  counter = 0;
};

wrapper.addEventListener("transitionend", infiniteCarousel);
