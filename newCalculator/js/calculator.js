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

    getControl(id) {
        debugger;
        let control = null;
        const items = this.getItems();

        // 모든 items을 돌면서 itemList들을 새로 정의한 빈배열에 push한다.
        // itemList들이 push가 끝나면 해당 배열을 돌며 id랑 동일한 객체가 있는지 찾는다.
        // id와 동일한 객체가 존재하면 해당 객체 리턴, 아니면 없다고 판단하고 null을 리턴한다.

        return control;
    }
}