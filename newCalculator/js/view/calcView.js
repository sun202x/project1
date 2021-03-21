import CalcHtmlView from "./calcHtmlView.js";

export default class CalcView {
    constructor() {
        this.calcHtmlView = new CalcHtmlView();
    }

    render(viewData) {
        this.calcHtmlView.render(viewData);
    }
}