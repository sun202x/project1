import CalcGenerator from "./calcGenerator.js";
import CalcHtmlView from "./view/calcHtmlView.js";

export default class Calculator {
    constructor() {
        this.itemList = [];
        this.calcGenerator = new CalcGenerator();
        this.calcHtmlView = new CalcHtmlView();
        this.setItems(this.onInitContents());
    }

    render() {
        const viewData = this.getItems();
        this.calcHtmlView.render(viewData);
    }

    // override
    onInitContents() {}

    setItems(items) {
        this.itemList.push(items);
    }

    getItems() {
        return this.itemList;
    }

    find(items, callback) {
        items.forEach((item) => {
            const itemList = item.itemList;

            callback(item);

            if (itemList && itemList.length > 0) {
                this.find(itemList, callback);
            }
        });
    }

    getControl(id) {
        let control = null;
        const items = this.getItems();
        const result = [];

        this.find(items, (citem) => {
            if (citem.id === id) {
                control = citem;
            }
        });

        return control;
    }

    updateElement(target, value) {
        const items = this.getItems();

        this.find(items, (item) => {
            if (item.id === target.id) {
                target.label = value;
            }
        });

        this.calcHtmlView.updateView(target, value);
    }
}