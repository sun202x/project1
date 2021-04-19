import CalcCareTaker from "./calcCareTaker.js";

export default class CalcOperator {
    constructor () {
        this.prevValue = 0;
        this.currentValue = 0;
        this.totalValue = 0;
        this.operatorCheck = true;
        this.operatorValue = "";
        this.historyList = [];
    }

    getCalcResult(target) {
        const value = target.value;

        switch(target.type) {
            case "number":
                return this.number(value);
            case "operator":
                return this.operator(value);
            case "equal":
                return this.equal(value);
            case "clear":
                return this.clear(value);
            case "clearAll":
                return this.clearAll(value);
            default:
                return "";
        }
    }

    // calculateValue(value) {
    //     let result;
    //     const prevValue = (this.prevValue !== "") ? parseInt(this.prevValue) : "";
    //     const currentValue = (this.currentValue !== "") ? parseInt(this.currentValue) : "";

    //     switch(value) {
    //         case "+":
    //             result = prevValue + currentValue;
    //             break;
    //         case "-":
    //             result = prevValue - currentValue;
    //             break;
    //         case "*":
    //             result = prevValue * currentValue;
    //             break;
    //         case "/":
    //             result = prevValue / currentValue;
    //             break;
    //         case "^":
    //             result = Math.pow(prevValue, currentValue);
    //             break;
    //         case "%":
    //             result = this.prevValue * 0.1;
    //     }

    //     return result;
    // }

    // number(value) {
    //     this.number(value);
    // }

    // operator(value) {
    //     this.operator(value);
    // }

    // clear(str) {
    //     this.clear(str);
    // }

    clearAll(str) {
        this.operatorCheck = true;
        this.operatorValue = str;
        this.prevValue = "";
        this.totalValue = "";
        this.historyList = [];

        return this.currentValue;
    }

    // equal(value) {
    //     this.equal(value);
    // }

    createSnapshot() {
        return {
            totalValue: this.totalValue,
            historyList: this.historyList
        };
    }

}