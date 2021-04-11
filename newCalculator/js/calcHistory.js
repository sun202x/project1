export default class CalcHistory {
    constructor() {
        this.init();
    }

    init() {
        this.display = false;
        this.listCount = 0;
        this.snapshotList = [];
    }

    render(parent) {
        this.createHistroy(parent);
    }

    createHistroy(parent) {
        const div = document.createElement("div");
        div.setAttribute("id", "wrapper-history");
        div.style.display = "none";
        const ul = document.createElement("ul");
        ul.setAttribute("id", "history-list");

        div.append(ul);
        parent.append(div);
        
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

    storeDatas(datas) {
        this.snapshotList = datas;
    }

    clear() {
        this.snapshotList = [];
    }
}