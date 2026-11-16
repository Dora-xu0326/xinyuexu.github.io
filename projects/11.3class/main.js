let container = document.querySelector(".wrapper");
// save the value of wrapper into container
let dateDiv = document.createElement("div");
// create a element div and save it in data div
let mover = document.querySelector(".mover");
// save the value of mover into mover

function changeShape() {
  //function named changeShape
  let randomHeight = Math.floor//get the integer number below
  (Math.random() * 100) + 1; // random number created get a integer
  
  mover.style.height = randomHeight + "%";// change the width of mover randomly eg 35% width
  console.log("New Height:", randomHeight+ "%");
  mover.style.backgroundColor = "lightblue";
}



function clearPage() {
  dateDiv.innerHTML = " "; //remove the text in the original html
}

changeShape();

setInterval(changeShape, 1000);