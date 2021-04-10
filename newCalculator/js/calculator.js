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

    toCamelCase(str) {
        return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
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
        const items = this.getItems();
        const result = [];
        let control = null;

        this.find(items, (citem) => {
            if (citem.id === id) {
                control = citem;
            }
        });

        return control;
    }

    setValue(target, value) {
        this.setState(target, value, "value");
    }

    setLabel(target, label) {
        this.setState(target, label, "label");
    }

    setState(target, state, type) {
        const items = this.getItems();
        const funcName = this.toCamelCase("on_change_" + type); // 추후 수정

        // 1. 데이터의 속성값을 찾아 변경해준다.
        this.find(items, (item) => {
            if (item.id === target.id) {
                target[type] = state;
            }
        });

        // 2. 데이터 속성값을 변경 후 HTML을 업데이트 해준다.
        if (this.calcHtmlView[funcName] && typeof this.calcHtmlView[funcName] === "function") {
            this.calcHtmlView[funcName](target, type);
        }
    }

    // updateElement(target, value) {
    //     const items = this.getItems();

    //     this.find(items, (item) => {
    //         if (item.id === target.id) {
    //             target.label = value;
    //         }
    //     });

    //     this.calcHtmlView.updateView(target, value);
    // }
}