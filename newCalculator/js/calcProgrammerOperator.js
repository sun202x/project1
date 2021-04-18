import CalcOperator from "./calcOperator.js";

export default class CalcProgrammerOperator extends CalcOperator {
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


    number(value) {
        let currentValue = this.currentValue;
        let result;

        if (currentValue.hex == "0") {
            currentValue.hex = (value + "");
        } else {
            currentValue.hex += (value + "");
        }

        result = this.getNumberType(currentValue);
        this.operatorCheck = false;
        this.currentValue = result;
        return result;
    }

    getNumberType(value) {
        const result = {};

        result.hex = parseInt(value, 16).toString(16); // 16진수
        result.dec = parseInt(value, 16).toString(10); // 10진수
        result.oct = parseInt(value, 16).toString(8);  // 8진수
        result.bin = parseInt(value, 16).toString(2);  // 2진수

        return result;
    }

    createSnapshot() {
        return {
            totalValue: this.totalValue,
            historyList: this.historyList
        };
    }

}