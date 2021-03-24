export default class CalcButtonView {
    constructor(options) {
        this.controlType = options.controlType;
        this.id = options.id;
        this.type = options.type || "";
        this.value = options.value || "";
        this.label = options.label || "";
        return this.render();
    }

    render() {
        const button = document.createElement("button");
        button.setAttribute("type", this.type);
        button.setAttribute("id", this.id);
        button.setAttribute("value", this.value);
        button.innerText = this.label;
    
        return button;
    }
}