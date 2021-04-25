import CalcOperator from "./calcOperator.js";

export default class CalcProgrammerOperator extends CalcOperator {
    constructor () {
        super();
        this.currentValue = { hex: "0", dec: "0", oct: "0", bin: "0" };
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
        let result = this.currentValue;

        if (result == "0") {
            result = (value + "");
        } else {
            result += (value + "");
        }

        this.currentValue = this.convertData(result);
        this.operatorCheck = false;

        return result;
    }

    convertData(value) {
        const result = {};

        if (currentValue.hex == "0") {
            currentValue.hex = (value + "");
        } else {
            currentValue.hex += (value + "");
        }

        result.hex = parseInt(currentValue.hex, 16).toString(16); // 16진수
        result.dec = parseInt(currentValue.hex, 16).toString(10); // 10진수
        result.oct = parseInt(currentValue.hex, 16).toString(8);  // 8진수
        result.bin = parseInt(currentValue.hex, 16).toString(2);  // 2진수

        return result;
    }

    clearAll(str) {
        this.currentValue = { hex: "0", dec: "0", oct: "0", bin: "0" };
        return super.clearAll(str);
    }

    createSnapshot() {
        return {
            totalValue: this.totalValue,
            historyList: this.historyList
        };
    }

}