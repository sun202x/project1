class Calculator {
    constructor() {
        this.result = 0;

        this.createCalculator();
        this.numberBindEvent();
        this.operatorBindEvent();
        this.decimalBindEvent();
    }

    createCalculator() {
        let wrapper = document.body,
            wrapperPad = "",
            displayPad = this.createDisplayPad(),
            numberPad = this.createNumberPad(),
            operationPad = this.createOperationPad(),
            decimalPad = this.createDecimalPad();

        wrapperPad += displayPad;
        wrapperPad += numberPad;
        wrapperPad += operationPad;
        wrapperPad += decimalPad;

        wrapper.innerHTML = wrapperPad;
    }

    createDisplayPad() {
        return `<input type="text" class="display" readonly="readonly" />`;
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
            `<button type="button" class="operator">+</button>`,
            `<button type="button" class="operator">-</button>`,
            `<button type="button" class="operator">*</button>`,
            `<button type="button" class="operator">/</button>`
        ].join("");
    }

    createDecimalPad() {
        return `<button type="button" class="decimal">=</button>`;
    }

    numberBindEvent() {
        let numbers = document.querySelectorAll(".number");

        numbers.forEach((button) => {
            button.addEventListener("click", (event) => {
                const display = document.querySelector(".display");
                let value = event.target.innerText;

                display.value += value;
            });
        });
    }

    operatorBindEvent() {
        let operators = document.querySelectorAll(".operator");

        operators.forEach((operator) => {
            operator.addEventListener("click", (event) => {
                const display = document.querySelector(".display");
                let value = event.target.innerText;

                display.value += value;
            });
        });
    }

    decimalBindEvent() {
        let decimal = document.querySelector(".decimal");

        decimal.addEventListener("click", (event) => {
            const display = document.querySelector(".display");

            display.value = eval(display.value);
        });
    }
}