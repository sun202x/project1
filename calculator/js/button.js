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
        return `<button type="button" id=${this.id}>${this.label}</button>`;
    }
}

// 기본
class NumberButton extends Button {

}

// 연산자
class OperatorButton extends Button {

}

// 합계
class EqualButton extends Button {

}

// 초기화
class ClearButton extends Button {

}