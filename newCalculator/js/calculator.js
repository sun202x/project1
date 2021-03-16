import CalcGenerator from "./calcGenerator.js";
import CalcView from "./view/calcView.js";

export default class Calculator {
    constructor() {
        this.calcGenerator = new CalcGenerator();
        // this.calcView = new CalcView();
        this.itemList = [];
    }

    createItem() {
        const data = this.getData();

        this.calcGenerator.itemDefine(data);
    }

    getParent() {
        return this.parent;
    }
}