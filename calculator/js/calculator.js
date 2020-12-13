class Calculator {
    constructor() {
        this.createCalculator();
        this.calcBindEvent();
    }

    createCalculator() {
        let body = document.body,
            calcWrapper = "",
            calcDisplay = this.createCalcDisplay(),
            calcNumberButton = this.createCalcNumberButton(),
            calcEtcButton = this.createCalcEctButton();

        calcWrapper += calcDisplay;
        calcWrapper += calcNumberButton;
        calcWrapper += calcEtcButton;

        body.innerHTML = calcWrapper;
    }

    createCalcDisplay() {
        return `<input type="text" class="display" value="0" readonly="readonly" />`;
    }

    createCalcNumberButton() {
        let numberStr = "";

        for (let i = 0; i < 10; i++) {
            numberStr += `<button type="button" id="number${i}" class="number">${i}</button>`;
        }

        return numberStr;
    }

    createCalcEctButton() {
        return [
            `<button type="button" class="operator">+</button>`,
            `<button type="button" class="operator">-</button>`,
            `<button type="button" class="operator">*</button>`,
            `<button type="button" class="operator">/</button>`,
            `<button type="button" class="decimal">=</button>`,
            `<button type="button" class="clear">C</button>`
        ].join("");
    }

    calcBindEvent() {
        let buttons = document.querySelectorAll("button");

        buttons.forEach((button) => {
            button.addEventListener("click", (event) => {
                this.updateDisplay(event.target.innerText);
            });
        });
    }

    updateDisplay(value) {
        const display = document.querySelector(".display");

        switch(value) {
            case "=":
                display.value = eval(display.value);
                break;
            case "C":
                display.value = "0";
                break;
            default:
                if (display.value === "0") {
                    display.value = "";
                }
                display.value += value;
                break;
        }
    }
}