import DonutMaker from "./DonutMaker";
let donutClicker = document.getElementById("donutClicker");
let numberOfDonuts = document.getElementById("numDonuts");
let numberOfAutoClickers = document.getElementById("numAutoClickers");
let autoClickerCost = document.getElementById("autoClickerCost");
let purchaseAutoClicker = document.getElementById("purchaseAutoClicker");
let numberOfMultipliers = document.getElementById("numMultipliers");
let multiplierCost = document.getElementById("multiplierCost");
let donutsPerClick = document.getElementById("donutsPerClick")

const createdDonutMaker = new DonutMaker(0, 0, 0, 100, 10, 1);

let dpc =  Math.pow(1.2, createdDonutMaker.numMultipliers);


console.log(createdDonutMaker);

donutClicker.addEventListener("click", () => {
  createdDonutMaker.addDonut();
  numberOfDonuts.innerHTML = createdDonutMaker.numDonuts;
  console.log(dpc);
});

  purchaseAutoClicker.addEventListener("click", () => {
    createdDonutMaker.addAutoClicker();
    numberOfAutoClickers.innerHTML = createdDonutMaker.numAutoClickers;
    numberOfDonuts.innerHTML = createdDonutMaker.numDonuts;
    autoClickerCost.innerHTML = createdDonutMaker.autoClickerCost;


    setInterval(function () {
      createdDonutMaker.activateAutoClicker();
      numberOfDonuts.innerHTML = createdDonutMaker.numDonuts;
    }, 1000);
  });


  purchaseMultiplier.addEventListener("click", () => {
    createdDonutMaker.addMultiplier();
    numberOfMultipliers.innerHTML = createdDonutMaker.numMultipliers;
    multiplierCost.innerHTML = createdDonutMaker.multiplierCost;
    dpc = Math.pow(1.2, createdDonutMaker.numMultipliers);
    donutsPerClick.innerHTML = dpc;
    console.log(dpc);
  });