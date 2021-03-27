import CalcHtmlView from "./calcHtmlView.js";

export default class CalcButtonView {
    constructor(options) {
        this.controlType = options.controlType;
        this.id = options.id;
        this.type = options.type || "";
        this.value = options.value || "";
        this.label = options.label || "";

        return this.createDomElement();
    }

    // calcHtmlView를 상속받아서 아래 함수를 공통으로 사용하고 싶은데 에러나서 함수 우선 각각 정의...
    createDomElement() {
        const element = document.createElement(this.controlType);
        element.setAttribute("type", this.type);
        element.setAttribute("id", this.id);
        element.setAttribute("value", this.value);
        element.innerText = this.label;
    
        return element;
    }
}