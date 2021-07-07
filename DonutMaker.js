class DonutMaker {
    constructor(numDonuts, numAutoClickers, autoClickerCost) {
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.autoClickerCost = autoClickerCost;
    }
    addDonut() {
        this.numDonuts++;
    }
    addAutoClicker() {
        if (this.numDonuts >= 100) {
            this.numAutoClickers++;
            this.numDonuts = this.numDonuts - autoClickerCost;
            this.autoClickerCost = Math.round(autoClickerCost * 1.1);
    
        }
    }
    activateAutoClicker() {
        if (this.numAutoClickers > 0) {
            this.numDonuts += this.numAutoClickers;
    
        }
    }
}
    export default DonutMaker;    