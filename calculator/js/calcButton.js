class CalcButton {
    constructor(options = {}) {
        this.init(options);
    }

    init(options) {
        this.id = options.id;
        this.type = options.type;
        this.value = options.value;
    }

    render(parent) {
        const wrapperOperator = this.createWrapperOperator();
        const button = this.createButton();

        parent.innerHTML += button;
    }

    createWrapperOperator() {
        return `<div class="wrapper-operator"></div>`;
    }

    createButton() {
        return `<button type="button" data-type="${this.type}" id=${this.id}>${this.value}</button>`;
    }
}