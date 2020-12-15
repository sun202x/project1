class Calculator {
    constructor() {
        this.itemList = [];
        this.createCalculator();
        this.calcBindEvent();
    }

    createCalculator() {
        const body = document.body;
        this.createCalcDisplay(body);
        this.createCalcButton(body);
    }

    createCalcDisplay(parent) {
        parent.innerHTML = `<input type="text" class="display" value="0" readonly="readonly" />`;
    }

    createCalcButton(parent) {
        let data = this.getData();

        data.forEach((item) => {
            const type = item.type;
            let button = null;

            // 자식에 대한 의존성이 너무 높음 - 버튼종류가 생기면 이부분 수정이 필요함
            // 의존성 역전으로 객체를 생성할 수 있도록 수정
            // 현재 의존성 : 부모 > 자식 || 수정 후 의존성 : 부모 < 자식
            switch(type) {
                case "OperatorButton":
                    button = new OperatorButton(item.id, item.label);
                    break;
                case "EqualButton":
                    button = new EqualButton(itqem.id, item.label);
                    break;
                case "ClearButton":
                    button = new ClearButton(itqem.id, item.label);
                    break;
                default:
                    button = new NumberButton(item.id, item.label);
                    break;
            }

            this.itemList.push(button);
            button.render(parent);
        });
    }

    getData() {
        return [
            {
                id: "number0",
                type: "NumberButton",
                label: 0
            },
            {
                id: "number1",
                type: "NumberButton",
                label: 1
            },
            {
                id: "number2",
                type: "NumberButton",
                label: 2
            },
            {
                id: "number3",
                type: "NumberButton",
                label: 3
            },
            {
                id: "number4",
                type: "NumberButton",
                label: 4
            },
            {
                id: "number5",
                type: "NumberButton",
                label: 5
            },
            {
                id: "number6",
                type: "NumberButton",
                label: 6
            },
            {
                id: "number7",
                type: "NumberButton",
                label: 7
            },
            {
                id: "number8",
                type: "NumberButton",
                label: 8
            },
            {
                id: "number9",
                type: "NumberButton",
                label: 9
            },
            {
                id: "plus",
                type: "Operator",
                label: "+",
            },
            {
                id: "minus",
                type: "Operator",
                label: "-",
            },
            {
                id: "multiply",
                type: "Operator",
                label: "*",
            },
            {
                id: "divition",
                type: "Operator",
                label: "/",
            },
            {
                id: "squared",
                type: "Operator",
                label: "^"
            },
            {
                id: "equal",
                type: "Equal",
                label: "="
            },
            {
                id: "clear",
                type: "Clear",
                label: "c"
            }
        ]
    }

    getItemList() {
        return this.itemList;
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