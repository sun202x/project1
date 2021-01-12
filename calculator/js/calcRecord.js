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

        if (data.operatorValue !== "c" && data.operatorValue !== "<") {
            target.innerText += data.prevValue + data.operatorValue;
        } else {
            target.innerText = "";
        }
    }
}