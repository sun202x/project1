import CalcGenerator from "./calcGenerator.js";
import CalcView from "./view/calcView.js";

export default class Calculator {
    constructor() {
        this.itemList = [];
        this.calcGenerator = new CalcGenerator();
        this.calcView = new CalcView();
        this.setItems(this.onInitContents());
    }

    render() {
        const viewData = this.getItems();
        this.calcView.render(viewData);
    }

    setItems(items) {
        this.itemList.push(items);
    }
    
    getItems() {
        return this.itemList;
    }

    getParent() {
        return this.parent;
    }
}