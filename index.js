import DonutMaker from "./DonutMaker";
let donutClicker = document.getElementById("donutClicker");
let numberOfDonuts = document.getElementById("numDonuts");
let numberOfAutoClickers = document.getElementById("numAutoClickers");
let autoClickerCost = document.getElementById("autoClickerCost");
let purchaseAutoClicker = document.getElementById("purchaseAutoClicker");

let createdDonutMaker = new DonutMaker(0, 0,100);
console.log(createdDonutMaker);

donutClicker.addEventListener("click", () => {
  createdDonutMaker.addDonut();
  numberOfDonuts.innerHTML = createdDonutMaker.numDonuts;
  console.log(createdDonutMaker.numDonuts);
});

purchaseAutoClicker.addEventListener("click", () => {
  createdDonutMaker.addAutoClicker();
  numberOfAutoClickers.innerHTML = createdDonutMaker.numAutoClickers;
  numberOfDonuts.innerHTML = createdDonutMaker.numDonuts;
  autoClickerCost.innerHTML = createdDonutMaker.autoClickerCost;
  console.log(createdDonutMaker.numAutoClickers);
  console.log(createdDonutMaker.autoClickerCost);

  setInterval(function () {
    createdDonutMaker.activateAutoClicker();
    numberOfDonuts.innerHTML = createdDonutMaker.numDonuts;
  }, 1000);
}
);