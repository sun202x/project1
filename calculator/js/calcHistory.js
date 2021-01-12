class CalcHistory {
    constructor() {
        this.init();
    }

    init() {
        this.display = false;
    }

    render(parent) {
        const list = this.createHistroy();
        const listButton = this.createHistoryButton();

        parent.innerHTML += list;
        parent.innerHTML += listButton;
    }

    createHistroy() {
        return `<div id="wrapper-history" style="display: none;"><ul id="history-list"></ul></div>`;
    }

    createHistoryButton() {
        return `<button type="button" id="history" style="width: 100px; height: 25px; margin-bottom: 10px;">기록보기</button>`
    }

    getTarget(id) {
        return document.getElementById(id);
    }

    setDisplay(flag) {
        this.display = flag;
    }

    showDisplay() {
        const target = this.getTarget("wrapper-history");

        target.style.display = "block";
        this.setDisplay(true);
    }

    hideDisplay() {
        const target = this.getTarget("wrapper-history");

        target.style.display = "none";
        this.setDisplay(false);
    }

    toggleDisplay() {
        if (this.display) {
            this.hideDisplay();
        } else {
            this.showDisplay();
        }
    }

    append(data) {
        const target = this.getTarget("history-list");
        let li = "<li></li>";

        target.innerHTML = li;
    }

    setHistory(data) {
        
    }

    getHistory() {
        
    }

    clearHistory() {
        
    }

    onClick() {
        
    }
}