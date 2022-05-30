const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const reset = document.getElementById("reset");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// Previous Button Functionality
prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

// Next Button Functionality
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

// Reset Button Functionality
reset.addEventListener("click", () => {
  currentActive = 1;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive > circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
  // This disables the next button if the currentActive is >= circle length

  if (currentActive >= circles.length) {
    reset.disabled = false;
    next.disabled = true;

    // This else if statement makes the next button active up the reset button use
  } else if (currentActive >= 1) {
    next.disabled = false;
  }
}
