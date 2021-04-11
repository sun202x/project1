import CalcGeneralCalculator from "./calcGeneralCalculator.js";
import CalcHistory from "./calcHistory.js";
// import CalcProgrammerCalculator from "./calcProgrammerCalculator.js";

class CalcLayout {
    constructor() {
        // this.calculator = new Calculator();
        this.calcHistory = new CalcHistory();
        this.calcGeneralCalculator = new CalcGeneralCalculator("#wrapper-calculator");
    }

    render() {
        this.createHeaderElement();
        this.calcGeneralCalculator.render();
    }

    createHeaderElement() {
        const wrapper = document.createElement("div");
        wrapper.setAttribute("id", "wrapper-calculator");
        const header = document.createElement("div");
        header.setAttribute("id", "header");
        const toolbar = document.createElement("div");
        toolbar.setAttribute("id", "wrapper-toolbar");
        const toggle = document.createElement("button");
        toggle.setAttribute("id", "toggle");
        toggle.innerText = "토글";
        const title = document.createElement("div");
        title.setAttribute("id", "title");
        title.innerText = "계산기";
        const history = document.createElement("button");
        history.setAttribute("id", "history");
        history.addEventListener("click", this.onClickHistory.bind(this));
        history.innerText = "기록";

        toolbar.append(toggle);
        toolbar.append(title);
        toolbar.append(history);

        header.append(toolbar);
        wrapper.append(header);

        this.calcHistory.render(header);
        
        document.body.append(wrapper);
    }

    onClickHistory(e) {
        const historyData = this.calcGeneralCalculator.getHistoryData();
        this.calcHistory.storeDatas(historyData);
        this.calcHistory.toggleDisplay();
    }
}
const calc = new CalcLayout();
calc.render();