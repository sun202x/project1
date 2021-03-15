import CalcHtmlView from "./calcHtmlView.js";

export default class CalcView {
    constructor() {
        this.calcHtmlView = new CalcHtmlView();
    }

    render(parent, datas) {
        let result;
        let data;

        for (let i = 0; i < datas.length; i++ ) {
            data = datas[i];
            
            result = this.calcHtmlView.render(data);
            parent.append(result);
        }
    }
}