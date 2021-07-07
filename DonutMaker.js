export default class DonutMaker {
    constructor(
        numDonuts,
        numAutoClickers,
        numMultipliers,
        autoClickerCost,
        multiplierCost,
        donutsPerClick
    ) {
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.numMultipliers = numMultipliers;
        this.autoClickerCost = autoClickerCost;
        this.multiplierCost = multiplierCost;
        this.donutsPerClick = donutsPerClick;
    }
    addDonut() {
        this.donutsPerClick=  Math.pow(1.20, this.numMultipliers);
        this.numDonuts += this.donutsPerClick;
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
