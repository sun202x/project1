import CalcOperator from "./calcOperator.js";

export default class CalcProgrammerOperator extends CalcOperator {
    convertData() {
        const result = {};

        result.hex = parseInt(this.currentValue).toString(16); // 16진수
        result.dec = parseInt(this.currentValue).toString(10); // 10진수
        result.oct = parseInt(this.currentValue).toString(8);  // 8진수
        result.bin = parseInt(this.currentValue).toString(2);  // 2진수

        return result;
    }
}