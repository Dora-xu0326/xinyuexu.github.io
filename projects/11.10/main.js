
let mover = document.querySelector(".mover");
let body = document.querySelector("body");

function updateClock() {
  let date = new Date();
  let hours = date.getHours();

  if (hours < 6) {
    mover.style.backgroundColor = "navy";
    body.classList.add("morning");
  } else if (hours < 12) {
    mover.style.backgroundColor = "lihgtgreen";
    body.classList.add("afternoon");
  } else if (hours < 18) {
    mover.style.backgroundColor = "yellow";
    body.classList.add("evening");
  } else {
    mover.style.backgroundColor = "red";
    body.classList.add("night");
  }

  console.log("Hour:", hours);
}

updateClock();

setInterval(updateClock, 1000);