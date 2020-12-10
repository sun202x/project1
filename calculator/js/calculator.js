class Calculator {
    constructor() {
        this.init();
        this.bindEvent();
    }

    init() {
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
        return [
            `<button type="button">+</button>`,
            `<button type="button">-</button>`,
            `<button type="button">*</button>`,
            `<button type="button">/</button>`,
            `<button type="button">=</button>`
        ].join("");
    }

    bindEvent() {
        let buttons = document.getElementsByTagName("button");
        let arr = [];

        for (let i = 0, len = buttons.length; i < len; i++) {
            let button = buttons[i];

            button.addEventListener("click", function (event) {
                let value = event.target.innerText;
                let input = document.getElementById("input");

                if (value === "=") {
                    
                }

                input.value += value;
            });
        }
    }
}