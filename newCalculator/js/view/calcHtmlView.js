import CalcButtonView from "./calcButtonView.js";
import CalcDisplayView from "./calcDisaplyView.js";

export default class CalcHtmlView {
    constructor() {
        this.calcButtonView = new CalcButtonView();
        this.calcDisplayView = new CalcDisplayView();
    }
    
    render(viewData) {
        const body = document.body;
        const wrapper = this.createWrapper();

        const data = {
            id: "aaa",
            type: "button",
            controlType: "button",
            label: "버튼",
            value: "버튼"
        }

        const item = this.calcButtonView.createViewElement(data);
        wrapper.append(item);

        body.append(wrapper);
    }

    createWrapper() {
        const div = document.createElement("div");
        div.setAttribute("id", "calculator");

        return div;
    }
}