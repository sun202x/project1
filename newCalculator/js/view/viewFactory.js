import CalcButtonView from "./calcButtonView.js";
import CalcDivView from "./calcDivView.js";

export default class ViewFactory {
    static createInstance(data) {
        const type = data.controlType;

        switch(type) {
            case "button":
                return new CalcButtonView();
            case "div":
                return new CalcDivView();
        }
    }

}