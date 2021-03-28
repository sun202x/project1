import CalcGenerator from "./calcGenerator.js";
import CalcHtmlView from "./view/calcHtmlView.js";

export default class Calculator {
    constructor() {
        this.itemList = [];
        this.calcGenerator = new CalcGenerator();
        this.calcView = new CalcHtmlView();
        this.setItems(this.onInitContents());
    }

    render() {
        const viewData = this.getItems();
        this.calcView.render(viewData);
    }

    // override
    onInitContents() {}

    setItems(items) {
        this.itemList.push(items);
    }
    
    getItems() {
        return this.itemList;
    }
}