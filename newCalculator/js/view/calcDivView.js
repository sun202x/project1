import CalcHtmlView from "./calcHtmlView.js";

export default class CalcDivView {
    constructor(options) {
        this.controlType = options.controlType;
        this.id = options.id;
        this.label = options.label || "";

        return this.createDomElement();
    }

    // calcHtmlView를 상속받아서 아래 함수를 공통으로 사용하고 싶은데 에러나서 함수 우선 각각 정의...
    createDomElement() {
        const element = document.createElement(this.controlType);
        element.setAttribute("id", this.id);
        element.innerText = this.label;
    
        return element;
    }
}