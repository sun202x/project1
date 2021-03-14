import Calculator from "./calculator.js";

export default class CalcGeneralCalculator extends Calculator {
    constructor() {
        super();
        const toolbar = this.calcGenerator.calcButtonLayout;
        const control = this.calcGenerator.calcControl;

        const button = control.define("button", "button1")
            .value("0")
            .label("0")
            .end();
        toolbar.add(button);
    }

    getData() {
        return [
            {
                type: "div",
                id: "display",
            },
            {
                type: "button",
                id: "button1",
                value: "0"
            }
        ]
    }
}