import CalcButtonView from "./calcButtonView.js";
import CalcDivView from "./calcDivView.js";

export default class CalcHtmlView {
    constructor() {
        
    }
    
    render(viewData) {
        return this.createHtmlElement(viewData);
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
}