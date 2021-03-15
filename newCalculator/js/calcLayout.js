// import CalcHistory from './calcHistory.js';
import Calculator from './calculator.js';
import CalcGeneralCalculator from "./calcGeneralCalculator.js";
// import CalcProgrammerCalculator from "./calcProgrammerCalculator.js";

class CalcLayout {
    constructor() {
        // this.calcHistory = new CalcHistory();
        // this.calculator = new Calculator();
        this.calcGeneralCalculator = new CalcGeneralCalculator();
    }

    render() {
        const parent = document.querySelector("#calc");

        this.calcGeneralCalculator.render(parent);
    }
}

const calc = new CalcLayout();
calc.render();