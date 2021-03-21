export default class CalcButtonView {
    constructor(options) {
        // super();
    }

    render() {
        
    }

    createViewElement(viewData) {
        const button = document.createElement("button");
        button.setAttribute("type", viewData.type);
        button.setAttribute("id", viewData.id);
        button.setAttribute("value", viewData.value);
        button.innerText = viewData.label;

        return button;
    }
}