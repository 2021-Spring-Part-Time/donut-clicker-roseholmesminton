import DonutMaker from "./DonutMaker";
let donutClicker = document.getElementById("donutClicker");
let numberOfDonuts = document.getElementById("numDonuts");
let createdDonutMaker = new DonutMaker(0, 0);
console.log(createdDonutMaker);


donutClicker.addEventListener("click", () => {
  createdDonutMaker.addDonut();
  numberOfDonuts.innerHTML = createdDonutMaker.numDonuts;
  console.log(createdDonutMaker.numDonuts);
});


  

