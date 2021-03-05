class CalcDisplay {
    constructor() {

    }

    init() {
        
    }

    render(parent) {
        const display = this.createCalcDisplay();

        parent.innerHTML += display;
    }

    createCalcDisplay() {
        return `<input type="text" id="display" value="0" readonly="readonly" />`;
    }

    getDisplay() {
        return document.getElementById("display");
    }

    update(result) {
        const display = this.getDisplay();

        display.value = result;
    }
}