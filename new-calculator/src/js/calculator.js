import CalcGenerator from "./calcGenerator.js";
import CalcOperator from "./calcOperator.js";
import CalcHtmlView from "../view/html/calcHtmlView.js";
import CalcReactView from "../view/react/calcReactView";

export default class Calculator {
    constructor(parentID) {
        this.itemList = [];
        this.historyData = [];
        this.calcGenerator = new CalcGenerator();
        this.calcHtmlView = new CalcHtmlView(parentID);
        this.calcView = new CalcReactView();
        this.setItems(this.onInitContents());
    }

    render() {
        const viewData = this.getItems();
        // this.calcHtmlView.render(viewData);
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

    getHistoryData() {
        return this.historyData;
    }

    toCamelCase(str) {
        return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    }

    // @TODO 제거
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
        let control = null;

        this.find(items, (citem) => {
            if (citem.id === id) {
                control = citem;
            }
        });

        return control;
    }
    
    getDisabledItems(items, type) {
        const result = [];
        
        

        return result;
    }

    // TODO 수정
    setDisabled(type) {
        const kindType = type.toLowerCase();
        const items = this.getItems();
        const state = "disabled";

        this.find(items, (item) => { 
            if (kindType === "dec") {
                if (["hex"].includes(item["data-kind"])) {
                    item[state] = true;
                } else {
                    item[state] = false;
                }
            } else if (kindType === "oct") {
                if (["hex", "dec"].includes(item["data-kind"])) {
                    item[state] = true;
                } else {
                    item[state] = false;
                }
            } else if (kindType === "bin") {
                if (["hex", "dec", "oct"].includes(item["data-kind"])) {
                    item[state] = true;
                } else {
                    item[state] = false;
                }
            } else {
                if (item["data-kind"]) {
                    item[state] = false;
                }
            }
        });
        
        // this.calcHtmlView.render(items, state);
    }

    setSelectItem(target) {
        const items = this.getItems();

        this.find(items, (item) => {
            if (item.id === target.id) {
                item.selector = true;
            } else {
                item.selector = false;
            }
        });
    }

    setValue(id, value) {
        this.setState(id, "value", value);
    }

    setLabel(id, label) {
        this.setState(id, "innerText", label);
    }

    showDisplay(id) {
        this.setState(id, "className", "show");
    }

    hideDisplay(id) {
        this.setState(id, "className", "hide");
    }

    setState(id, state, value) {
        const items = this.getItems();

        // 1. 데이터의 속성값을 찾아 변경해준다.
        this.find(items, item => {
            if (item.id === id) {
                item[state] = value;
            }
        });

        // 2. 데이터 속성값을 변경 후 HTML을 업데이트 해준다.
        this.calcView.render(items, state);
    }
}