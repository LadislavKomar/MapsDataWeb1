function openPopup(imageSrc) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popupImg.src = imageSrc;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// carousel move
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

/* read exif data */
document.querySelectorAll(".thumbnail img").forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popupImage");
    const exifDataDiv = document.getElementById("exifData");

    popupImage.src = this.src;
    popup.style.display = "block";

    EXIF.getData(this, function () {
      const exifData = EXIF.pretty(this);
      exifDataDiv.innerHTML = exifData ? exifData : "No EXIF data found";
    });
  });
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});
