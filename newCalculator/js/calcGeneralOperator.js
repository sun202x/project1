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

    number(value) {
        let result = this.currentValue;

        if (result == "0") {
            result = (value + "");
        } else {
            result += (value + "");
        }

        this.currentValue = result;
        this.operatorCheck = false;

        return result;
    }

    operator(value) {
        let result = (this.operatorValue === value) ? this.prevValue : "";

        if (!this.operatorCheck && value !== "%") {
            this.operatorCheck = true;
            this.operatorValue = value;
            this.prevValue = this.currentValue;
            this.currentValue = "0";

            result = this.prevValue + value;
        } else if (value === "%") {
            result = this.calculateValue(value);
            this.prevValue = result;
        }

        this.historyList.push(this.prevValue);
        this.historyList.push(this.operatorValue);

        return result;
    }

    clear(str) {
        let value = this.currentValue.split(""),
            result;

        value.pop();

        if (value.length <= 0) {
            value = ["0"];
        }

        result = value.join("");
        this.currentValue = result;
        this.operatorValue = str;

        return result;
    }

    equal(value) {
        let result = "";

        if (this.prevValue !== "" && this.currentValue !== "") {
            result = this.calculateValue(this.operatorValue);
        } else {
            result = "0";
        }

        this.operatorValue = value;
        this.prevValue =  this.currentValue;
        this.currentValue = "";
        this.totalValue = result;

        this.historyList.push(this.prevValue);
        this.historyList.push(this.operatorValue);

        return result;
    }
}