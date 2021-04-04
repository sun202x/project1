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

    find(items, callback) {
        items.forEach((item) => {
            const itemList = item.itemList;

            if (itemList) {
                callback(item);
                this.find(itemList, callback);
            }
        });
    }

    getControl(id) {
        let control = null;
        const items = this.getItems();
        const result = [];

        // 모든 items을 돌면서 itemList들을 새로 정의한 빈배열에 넣는다.
        // itemList들이 push가 끝나면 해당 배열을 돌며 id랑 동일한 객체가 있는지 찾는다.
        // id와 동일한 객체가 존재하면 해당 객체 리턴, 없으면 null을 리턴한다.
        this.find(items, (citem) => {
            const citemList = citem.itemList;

            if (citem.id === "wrapper-calculator") {
                result.push(citem);
            }

            citemList.forEach(function(c) {
                result.push(c);
            });
        });

        result.forEach(function (c) {
            if (c.id === id) {
                control = c;
            }    
        })

        return control;
    }
}