class Calculator {
    constructor() {
        this.init();
        this.render();
        this.calcBindEvent();
    }
    
    init() {
        this.itemList = [];
        this.wrapper = document.body;
    }

    render() {
        this.createCalculator();
    }

    createCalculator() {
        this.createCalcDisplay();
        this.createCalcButton();
    }

    createCalcDisplay() {
        this.wrapper.innerHTML = `<input type="text" id="display" value="0" readonly="readonly" />`;
    }

    createCalcButton() {
        let data = this.getData();

        data.forEach((item) => {
            const type = item.type;
            let button = null;

            // 자식에 대한 의존성이 너무 높음 - 버튼이 추가될 때 매번 추가해줘야함
            // 의존성 역전으로 객체를 생성할 수 있도록 수정
            // 현재 의존성 : 부모 > 자식 || 수정 후 의존성 : 부모 < 자식
            switch(type) {
                case "Operator":
                    button = new OperatorButton(item.id, item.label);
                    break;
                case "Equal":
                    button = new EqualButton(item.id, item.label);
                    break;
                case "Clear":
                    button = new ClearButton(item.id, item.label);
                    break;
                default:
                    button = new NumberButton(item.id, item.label);
                    break;
            }

            this.itemList.push(button);
            button.render(this.wrapper);
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

    getTarget(event) {
        return event.target.getAttribute("id");
    }

    calcBindEvent() {
        let buttons = document.querySelectorAll("button");

        buttons.forEach((button) => {
            button.addEventListener("click", (event) => {
                this.onClick(event);
            });
        });
    }

    onClick(event) {
        // target 찾아서 해당 버튼 onclick 호출
        const display = document.getElementById("display");

        let target = this.itemList.find((button) => {
            if (button.id === this.getTarget(event)) {
                return button;
            }
        });

        target.onClick(display);
    }
}