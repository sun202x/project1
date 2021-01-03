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
            case "Backspace":
                return this.backspace(target.value);
            case "Clear":
                this.clear();
                return "0";
            default:
                return "";
        }
    }

    // @TODO value => id로 변경필요
    // value들 value로 변경
    calculateValue(value) {
        let result;
        const prevValue = parseInt(this.prevValue);
        const currentValue = parseInt(this.currentValue);

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
        let result = (this.operatorValue === value) ? this.prevValue + value : "";

        if (!this.operatorCheck) {
            this.operatorCheck = true;
            this.operatorValue = value;
            this.prevValue = this.currentValue;
            this.currentValue = "0";

            result = this.prevValue + value;
        }

        return result;
    }

    backspace(value) {
        return value;
    }

    clear() {
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

        this.prevValue = "";
        this.currentValue = "";

        return result;
    }
}