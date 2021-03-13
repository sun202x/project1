class Control {
    constructor(options) {
        this.init(options);
    }

    init(options) {
        this.type = options.type;
        this.id = options.id;
        this.value = options.value;
        this.callback = options.callback || function () {};
    }

    render(parent) {
        const control = this.createControl();

        parent.innerHTML += control;

        this.bindEvent();
    }

    createControl() {
        return `<input type="${this.type}" id="${this.id}" value="${this.value}">`;
    }

    bindEvent() {
        const target = document.getElementById(this.id);
        target.addEventListener("click", e => {
            
        });
    }
}