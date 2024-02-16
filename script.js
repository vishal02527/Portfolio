//Code for dynamic text generation

const dynamicText = document.getElementById("dynamicText");
const cursor = document.getElementById("cursor");
const textArray = [
  "Tech Enthusiast",
  "Coder",
  "Full Stack Developer",
  "Software Developer",
];
let index = 0;
let letterIndex = 0;
let text = "";
let reverseMode = false;

function updateText() {
  if (!reverseMode) {
    if (letterIndex < textArray[index].length) {
      text += textArray[index].charAt(letterIndex);
      dynamicText.textContent = text;
      letterIndex++;
    } else {
      reverseMode = true;
    }
  } else {
    if (letterIndex > 0) {
      text = text.slice(0, -1);
      dynamicText.textContent = text;
      letterIndex--;
    } else {
      reverseMode = false;
      index = (index + 1) % textArray.length;
    }
  }
  const textWidth = dynamicText.offsetWidth;
  const containerWidth = dynamicText.parentElement.offsetWidth;
  const cursorOffset = (containerWidth - textWidth) / 2 + textWidth + 45;
  cursor.style.left = cursorOffset + "px";
}

setInterval(updateText, 130);

/*Code for the filtering Projects */

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-button");
  const gridItems = document.querySelectorAll(".grid-item");

  // Add 'active' class to the 'All' button by default
  document
    .querySelector("[data-filter='all']")
    .classList.add("active-filter-button");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");

      // Remove 'active' class from all filter buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active-filter-button");
      });

      // Add 'active' class to the clicked filter button
      button.classList.add("active-filter-button");

      gridItems.forEach((item) => {
        if (filterValue === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(filterValue)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
});
