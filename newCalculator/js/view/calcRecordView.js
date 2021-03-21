export default class CalcRecordView {
    constructor() {
    }

    render() {
        const button = document.createElement("button");
        button.setAttribute("type", options.type);
        button.setAttribute("id", options.id);
        button.innerText = options.label;

        return button;
    }
}