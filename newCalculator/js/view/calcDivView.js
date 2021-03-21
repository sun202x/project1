export default class CalcDivView {
    constructor(options) {
        this.id = options.id;
        this.controlType = options.controlType;
    }

    render() {
        const element = document.createElement(this.controlType);

        return element;
    }
}