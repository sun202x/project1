import CalcButtonView from "./calcButtonView.js";
import CalcDisplayView from "./calcDisaplyView.js";
import CalcDivView from "./calcDivView.js";

export default class CalcHtmlView {
    constructor() {

    }
    
    render(viewData) {
        // const body = document.body;
        // const wrapper = this.createWrapper();

        // wrapper.append(item);

        // body.append(wrapper);
        
    }

    createHtmlElement(data) {
        const type = data.controlType;

        switch(type) {
            case "button":
                return new CalcButtonView(data);
            case "div":
                return new CalcDivView(data);
        }
    }

    createWrapper() {
        const div = document.createElement("div");
        div.setAttribute("id", "calculator");

        return div;
    }
}