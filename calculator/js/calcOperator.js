class CalcOperator {
    constructor () {
        this.prevValue = 0;
        this.currentValue = 0;
        this.operatorCheck = true;
        this.operatorValue = "";
    }

    getCalcResult(target) {
        switch(target.type) {
            case "NumberButton":
                return this.number(target.value);
            case "Operator":
                return this.operator(target.value);
            case "Equal":
                return this.equal();
            case "Clear":
                return this.clear();
            case "ClearAll":
                this.clearAll();
                return "0";
            default:
                return "";
        }
    }

    // @TODO value => id로 변경필요
    // value들 value로 변경
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

        return result;
    }

    clear() {
        let result,
            value = this.currentValue.split("");

        value.pop();

        if (value.length <= 0) {
            value = ["0"];
        }

        result = value.join("");
        this.currentValue = result;

        return result;
    }

    clearAll() {
        this.operatorCheck = true;
        this.operatorValue = "";
        this.prevValue = "";
        this.currentValue = "";
    }

    equal() {
        let result = "";

        if (this.prevValue !== "" && this.currentValue !== "") {
            result = this.calculateValue(this.operatorValue);
        }

        this.prevValue = result;
        this.currentValue = "";

        return result;
    }
}