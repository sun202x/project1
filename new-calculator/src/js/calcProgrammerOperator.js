import CalcOperator from "./calcOperator.js";

export default class CalcProgrammerOperator extends CalcOperator {
    convertData() {
        const result = {};
        let bin;

        // 각 진수별로 계산
        result.hex = parseInt(this.currentValue, 16).toString(16); // 16진수
        result.dec = parseInt(this.currentValue, 16).toString(10); // 10진수
        result.oct = parseInt(this.currentValue, 16).toString(8);  // 8진수
        result.bin = parseInt(this.currentValue, 16).toString(2);  // 2진수

        bin = result.bin.split("");

        // 2진수 변환 후 맨앞의 값이 0이면 3자리만 나오기때문에 맨앞에 0추가
        if (bin.length > 1 && bin.length < this.currentValue.split("").length * 4) {
            bin.unshift("0");
            result.bin = bin.join("");
        }

        return result;
    }
}