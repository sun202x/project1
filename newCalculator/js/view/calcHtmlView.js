import CalcButtonView from "./calcButtonView.js";

export default class CalcHtmlView {
    constructor() {
        
    }

    render(data) {
        let result;

        switch(data.type) {
            case "button":
                result = this.calcButtonView.render(data);
                break;
            default:
                break;
        }

        return result;
    }
}