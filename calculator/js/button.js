class Button {
    constructor(id, type, label) {
        this.id = id;
        this.type = type;
        this.label = label;
    }

    render(parent) {
        const button = this.createButton();

        parent.innerHTML += button;
    }

    createButton() {
        return `<button type="button" data-type="${this.type}" id=${this.id}>${this.label}</button>`;
    }
}