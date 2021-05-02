import CalcOperator from "./calcOperator.js";

export default class CalcGeneralOperator extends CalcOperator {
    convertData() {
        return this.currentValue;
    }
}