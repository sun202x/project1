import CalcHtmlView from "./calcHtmlView.js";

export default class CalcView {
    constructor() {
        this.calcHtmlView = new CalcHtmlView();
    }

    render(viewData) {
        // clacView에서 실제 view에 필요한 데이터를 하나씩 가공하여 htmlView로 넘겨준다.
        // clacHtmlView에서는 넘겨받은 데이터를 각 view클래스에 전달하고 만들어진 element를 dom에 추가한다.

        viewData.forEach((data) => {
            this.createViewItems(data);
        });
        
        this.calcHtmlView.render(viewData);
    }

    createViewItems(viewData) {
        debugger;


    }
}