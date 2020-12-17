class Button {
    constructor(id, label) {
        this.init(id, label);
    }
    
    init(id, label) {
        this.id = id;
        this.label = label;
        this.element = null;
    }

    render(parent) {
        let button = this.createButton();

        parent.innerHTML += button;
        this.element = parent.lastChild;
    }

    createButton() {
        return `<button type="button" id=${this.id}>${this.label}</button>`;
    }
}

// 기본
class NumberButton extends Button {
    onClick() {
        console.log("number");
    }
}

// 연산자
class OperatorButton extends Button {
    onClick() {
        console.log("operator");
    }
}

// 합계
class EqualButton extends Button {
    onClick() {
        console.log("equal");
    }
}

// 초기화
class ClearButton extends Button {
    onClick() {
        console.log("clear");
    }
}