class Button {
    constructor(id, label) {
        this.init(id, label);
    }
    
    init(id, label) {
        this.id = id;
        this.label = label;
    }

    render(parent) {
        let button = this.createButton();

        parent.innerHTML += button;
    }

    createButton() {
        return `<button type="button" data-type="${this.type}" id=${this.id}>${this.label}</button>`;
    }
}

// 기본
class NumberButton extends Button {
    onClick(display) {
        if (display.value === "0") {
            display.value = this.label;
        } else {
            display.value += this.label;
        }
        
    }
}

// 연산자
class OperatorButton extends Button {
    onClick(display) {
        display.value += this.label;
    }
}

// 합계
class EqualButton extends Button {
    onClick(display) {
        display.value = eval(display.value);
    }
}

// 초기화
class ClearButton extends Button {
    onClick(display) {
        display.value = "0";
    }
}