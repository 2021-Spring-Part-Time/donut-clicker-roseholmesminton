import DonutMaker from "./DonutMaker";
let donutClicker = document.getElementById("donutClicker");
let numberOfDonuts = document.getElementById("numDonuts");
let numberOfAutoClickers = document.getElementById("numAutoClickers");
let autoClickerCost = document.getElementById("autoClickerCost");
let purchaseAutoClicker = document.getElementById("purchaseAutoClicker");
let numberOfMultipliers = document.getElementById("numMultipliers");
let multiplierCost = document.getElementById("multiplierCost");
let purchaseMultiplier = document.getElementById("purchaseMultiplier");
let donutsPerClick = document.getElementById("donutsPerClick")
let createdDonutMaker = new DonutMaker(0, 0, 0, 100, 10, 1);

console.log(createdDonutMaker);

donutClicker.addEventListener("click", () => {
  createdDonutMaker.addDonut();
  numberOfDonuts.innerHTML = createdDonutMaker.numDonuts;
  donutsPerClick.innerHTML = createdDonutMaker.donutsPerClick;
  console.log(createdDonutMaker.numDonuts);
});

purchaseAutoClicker.addEventListener("click", () => {
  createdDonutMaker.addAutoClicker();
  numberOfAutoClickers.innerHTML = createdDonutMaker.numAutoClickers;
  numberOfDonuts.innerHTML = createdDonutMaker.numDonuts;
  autoClickerCost.innerHTML = createdDonutMaker.autoClickerCost;
  donutsPerClick.innerHTML = createdDonutMaker.donutsPerClick;

  console.log(createdDonutMaker.numAutoClickers);
  console.log(createdDonutMaker.autoClickerCost);

  setInterval(function () {
    createdDonutMaker.activateAutoClicker();
    numberOfDonuts.innerHTML = createdDonutMaker.numDonuts;
  }, 1000);
}
);

purchaseMultiplier.addEventListener("click", () => {
  createdDonutMaker.addMultiplier();
  numberOfMultipliers.innerHTML = createdDonutMaker.numMultipliers;
  multiplierCost.innerHTML = createdDonutMaker.multiplierCost;
  numberOfDonuts.innerHTML = createdDonutMaker.numDonuts;
  donutsPerClick.innerHTML = createdDonutMaker.donutsPerClick;
});