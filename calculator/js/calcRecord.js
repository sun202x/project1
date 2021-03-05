class CalcRecord {
    constructor() {
        this.init();
    }

    init() {
        
    }

    render(parent) {
        const display = this.createRecordDisplay();

        parent.innerHTML += display;
    }

    createRecordDisplay() {
        return `<div id="record"></div>`;
    }

    getTarget() {
        return document.getElementById("record");
    }

    setRecordValue(data) {
        const target = this.getTarget();
        const operatorValue = data.operatorValue;
        const prevValue = data.prevValue;

        if (operatorValue !== "c" && operatorValue !== "<" && operatorValue !== undefined) {
            target.innerText += prevValue + operatorValue;
        } else if (operatorValue === undefined) {
            target.innerText = data;
        } else {
            target.innerText = "";
        }
    }
}