class CalcOperator { 

    constructor () {
        this.prevValue = 0;
        this.currentValue = 0;
        this.operatorCheck = true;
        this.operatorValue = "";
    }

    getCalcResult(type, label) {
        switch(type) {
            case "NumberButton":
                return this.number(label);
            case "Operator":
                return this.operator(label);
            case "Equal":
                return this.equal(label);
            case "Clear":
                this.clear();
                return "0";
            default:
                return "";
        }
    }

    // @TODO label => id로 변경필요
    // label들 value로 변경
    calculateValue(label) {
        var result,
            prevValue = parseInt(this.prevValue),
            currentValue = parseInt(this.currentValue);

        switch(label) {
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

    number(label) {
        let result = this.currentValue;

        if (result == "0") {
            result = (label + "");
        } else {
            result += (label + "");
        }

        this.currentValue = result;
        this.operatorCheck = false;

        return result;
    }

    operator(label) {
        let result = "";

        if (!this.operatorCheck) {
            this.operatorCheck = true;
            this.operatorValue = label;
            this.prevValue = this.currentValue;
            this.currentValue = "0";

            result = this.prevValue + label;
        }

        return result;
    }

    clear() {
        this.operatorCheck = true;
        this.operatorValue = "";
        this.prevValue = "";
        this.currentValue = "";
    }

    equal(label) {
        let result = "";

        if (this.prevValue !== "" && this.currentValue !== "") {
            result = this.calculateValue(this.operatorValue);
        }
        
        this.prevValue = "";
        this.currentValue = "";

        return result;
    }

}