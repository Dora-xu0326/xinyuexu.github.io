let hour1 = document.querySelector(".hour1");
let hour2 = document.querySelector(".hour2");

let minute1 = document.querySelector(".minute1");
let minute2 = document.querySelector(".minute2");

let leaf = document.querySelector(".leaf");


function updateClock() {

  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let firstHour = Math.floor(hours / 10);
  let secondHour = hours - firstHour * 10;

  hour1.src = "img/" + firstHour + ".jpg";
  hour2.src = "img/" + secondHour + ".jpg";


  let firstMinute = Math.floor(minutes / 10);
  let secondMinute = minutes - firstMinute * 10;

  minute1.src = "img/" + firstMinute + ".jpg";
  minute2.src = "img/" + secondMinute + ".jpg";

  
  leaf.style.left = (seconds / 59 * 100) + "%";



  console.log("Time:", hours, minutes, seconds);
}


updateClock();

setInterval(updateClock, 1000);
