import Calculator from "./calculator.js";

export default class CalcGeneralCalculator extends Calculator {
    constructor() {
        super();
        this.onInitControl();
    }

    onInitControl() {
        const g = this.calcGenerator;
        const div = g.calcButtonLayout.div();
        const control = g.calcControl.control();

        const toggle = control.define("button", "toggle-button")
            .label("토글")
            .end();
        div.add(toggle);

        const title = control.define("div", "title")
            .label("표준")
            .end();
        div.add(title);

        const history = control.define("button", "history")
            .label("기록")
            .end();
        div.add(history);
        div.id("wrapper-toolbar");

        console.log(div.end());
    }

    render() {

    }
}