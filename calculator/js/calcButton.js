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
        const button = this.createButton();

        parent.innerHTML += button;
    }

    createButton() {
        return `<button type="button" data-type="${this.type}" id=${this.id}>${this.value}</button>`;
    }
}