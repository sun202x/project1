import Calculator from "./calculator.js";

export default class CalcGeneralCalculator extends Calculator {
    constructor() {
        super();

        // this.createItem();
    }

    createItem() {
        const data = this.getData();

        this.calcGenerator.itemDefine(data);
    }

    render(parent) {
        this.calcView.render(parent, this.getData());
    }

    getData() {
        return [
            {
                type: "button",
                id: "button0",
                label: "0"
            },
            {
                type: "button",
                id: "button1",
                label: "1"
            }
        ]
    }
}