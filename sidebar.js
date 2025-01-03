const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("highlight"));
    item.classList.add("highlight");
  });
});

function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = value;
}

function rangeSlide1(value) {
  document.getElementById("rangeValue1").innerHTML = value;
}
