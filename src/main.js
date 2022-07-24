import "./style.css";

// display overlay when one hovers over the card image container

// card image cotainer
const imgContainer = document.getElementById("img-container");
// overlay
const overlay = document.getElementById("overlay");

// add event listeners to imgContainer
// turn on visibility when mouse hovers over the container
imgContainer.addEventListener("mouseenter", () => {
  overlay.style.visibility = "visible";
});

// turn off visiblity when mouse leaves the container
imgContainer.addEventListener("mouseleave", () => {
  overlay.style.visibility = "hidden";
})
