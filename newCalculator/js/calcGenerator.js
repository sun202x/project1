import CalcButtonLayout from "./calcButtonLayout.js";
import CalcControl from "./calcControl.js";

export default class CalcGenerator {
    constructor() {
        this.calcControl = new CalcControl();
        this.CalcButtonLayout = new CalcButtonLayout();
        this.itemList = [];
    }

    itemDefine(items) {
        let citem;

        for (let i = 0, len = items.length; i < len; i++) {
            const item = items[i];

            citem = this.calcControl.define(item);
            this.itemList.push(citem);
        }
    }

    getItems() {
        return this.itemList;
    }
}