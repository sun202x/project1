class Calculator {
    constructor() {
        this.init();
        this.render();
    }

    init() {

    }

    render() {
        this.createCalculator();
    }

    createCalculator() {
        let wrapper = document.body;
        let wrapperPad = "";
        let displayPad = this.createDisplayPad();
        let numberPad = this.createNumberPad();
        let operationPad = this.createOperationPad();

        wrapperPad += displayPad;
        wrapperPad += numberPad;
        wrapperPad += operationPad;

        wrapper.innerHTML = wrapperPad;
    }

    createDisplayPad() {
        return `<input type="text" id="input" readonly="readonly" />`;
    }

    createNumberPad() {
        let numberStr = "";

        for (let i = 0; i < 10; i++) {
            numberStr += `<button type="button" id="number${i}" class="number">${i}</button>`;
        }

        return numberStr;
    }

    createOperationPad() {
        let operationStr = "";

    }
}