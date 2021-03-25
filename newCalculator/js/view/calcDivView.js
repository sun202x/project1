export default class CalcDivView {
    constructor(options) {
        this.controlType = options.controlType;
        this.id = options.id;
        this.label = options.label || "";
        return this.render();
    }

    render() {
        const element = document.createElement(this.controlType);
        element.setAttribute("id", this.id);
        element.innerText = this.label;

        return element;
    }
}