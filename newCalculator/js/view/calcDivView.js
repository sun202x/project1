export default class CalcDivView {
    constructor(options) {
        this.controlType = options.controlType;
        this.id = options.id;
        this.type = options.type || "";
        this.value = options.value || "";
        this.label = options.label || "";
        return this.render();
    }

    render() {
        const element = document.createElement(this.controlType);
        element.setAttribute("id", this.id);
        element.setAttribute("value", this.value);
        element.setAttribute("type", this.type);
        element.innerText = this.label;

        return element;
    }
}