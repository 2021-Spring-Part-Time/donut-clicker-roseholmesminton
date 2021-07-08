export default class DonutMaker {
  constructor(
    numDonuts,
    numAutoClickers,
    numMultipliers,
    autoClickerCost,
    multiplierCost
  ) {
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
    this.numMultipliers = numMultipliers;
    this.autoClickerCost = autoClickerCost;
    this.multiplierCost = multiplierCost;
  }
  addDonut() {
      this.numDonuts += Math.pow(1.2, this.numMultipliers);
  }

  addAutoClicker() {
    if (this.numDonuts >= this.autoClickerCost) {
      this.numAutoClickers++;
      this.numDonuts -= this.autoClickerCost;
      this.autoClickerCost = Math.round(this.autoClickerCost * 1.1);
    }
  }

  activateAutoClicker() {
    for (let i = 0; i < this.numAutoClickers; i++) {
      this.addDonut();
    }
  }
  addMultiplier() {
    if (this.numDonuts >= this.multiplierCost) {
      this.numMultipliers++;
      this.numDonuts -= this.multiplierCost;
      this.multiplierCost = Math.round(this.multiplierCost * 1.1);
    }
  }
}
