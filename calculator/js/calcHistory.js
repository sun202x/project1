class CalcHistory {
    constructor() {
        this.init();
    }

    init() {
        this.display = false;
        this.listCount = 0;
        this.snapshotList = [];
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

        if (this.snapshotList.length === 0) {
            target.innerHTML = `<li id="empty">저장 된 내역이 없습니다.</li>`;
        } else {
            target.innerHTML = this.snapshotList.map((snapshot, index) => 
                `<li id="list${index}">${this.getHistoryData(snapshot)}</li>`
            ).join('');
        }

        this.setDisplay(true);
    }

    hideDisplay() {
        const target = this.getTarget("wrapper-history");

        target.style.display = "none";
        this.setDisplay(false);
    }

    toggleDisplay() {
        this.display === true ? this.hideDisplay() : this.showDisplay();
    }

    getHistoryData(data) {
        let result = "";

        for (let i = 0, len = data.historyList.length; i < len; i++) {
            result += data.historyList[i];
        }

        result += data.totalValue;

        return result;
    }

    store(snapshot) {
        this.snapshotList.push(snapshot);
    }

    clear() {
        this.snapshotList = [];
    }
}