import CalcOperator from "./calcOperator.js";

export default class CalcGeneralOperator extends CalcOperator {
    constructor () {
        super();
    }

    calculateValue(value) {
        let result;
        const prevValue = (this.prevValue !== "") ? parseInt(this.prevValue) : "";
        const currentValue = (this.currentValue !== "") ? parseInt(this.currentValue) : "";

        switch(value) {
            case "+":
                result = prevValue + currentValue;
                break;
            case "-":
                result = prevValue - currentValue;
                break;
            case "*":
                result = prevValue * currentValue;
                break;
            case "/":
                result = prevValue / currentValue;
                break;
            case "^":
                result = Math.pow(prevValue, currentValue);
                break;
            case "%":
                result = this.prevValue * 0.1;
        }

        return result;
    }
}