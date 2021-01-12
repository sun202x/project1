class Calculator {
    constructor() {
        this.init();
        this.render();
        this.calcBindEvent();
    }

    init() {
        this.itemList = [];
        this.wrapper = document.body;
        this.operator = new CalcOperator();
        this.display = new CalcDisplay();
        this.history = new CalcHistory();
        this.record = new CalcRecord();
    }

    render() {
        this.createCalculator();
    }

    createCalculator() {
        this.history.render(this.wrapper);
        this.record.render(this.wrapper);
        this.display.render(this.wrapper);
        this.createCalcButton();
    }

    createCalcButton() {
        let data = this.getData();

        data.forEach((item) => {
            const button = new CalcButton(item);

            this.itemList.push(button);
            button.render(this.wrapper);
        });
    }

    // 별도의 파일로 만들어서 사용(json 형태), import사용
    // CORS정책(?) 때문에 에러나서 되지 않음... 우선 두는걸로..
    getData() {
        return [
            {
                id: "number0",
                type: "NumberButton",
                value: 0
            },
            {
                id: "number1",
                type: "NumberButton",
                value: 1
            },
            {
                id: "number2",
                type: "NumberButton",
                value: 2
            },
            {
                id: "number3",
                type: "NumberButton",
                value: 3
            },
            {
                id: "number4",
                type: "NumberButton",
                value: 4
            },
            {
                id: "number5",
                type: "NumberButton",
                value: 5
            },
            {
                id: "number6",
                type: "NumberButton",
                value: 6
            },
            {
                id: "number7",
                type: "NumberButton",
                value: 7
            },
            {
                id: "number8",
                type: "NumberButton",
                value: 8
            },
            {
                id: "number9",
                type: "NumberButton",
                value: 9
            },
            {
                id: "plus",
                type: "Operator",
                value: "+",
            },
            {
                id: "minus",
                type: "Operator",
                value: "-",
            },
            {
                id: "multiply",
                type: "Operator",
                value: "*",
            },
            {
                id: "divition",
                type: "Operator",
                value: "/",
            },
            {
                id: "percent",
                type: "Operator",
                value: "%",
            },
            {
                id: "squared",
                type: "Operator",
                value: "^"
            },
            {
                id: "equal",
                type: "Equal",
                value: "="
            },
            {
                id: "clearAll",
                type: "ClearAll",
                value: "c"
            },
            {
                id: "clear",
                type: "Clear",
                value: "<"
            }
        ]
    }

    getTarget(event) {
        return event.target.getAttribute("id");
    }

    // 이벤트 바인딩
    calcBindEvent() {
        document.body.addEventListener('click', e => {
            this.onClick(e);
        });
    }

    onClick(event) {
        // target 찾아서 해당 버튼 onclick 호출
        if (this.getTarget(event) === "history") {
            this.history.toggleDisplay();
        } else {
            this.history.hideDisplay();
            const target = this.itemList.find((button) =>
                button.id === this.getTarget(event)
            );

            if (target) {
                const result = this.operator.getCalcResult(target);
                const type = target.type;

                if (result !== undefined) {
                    this.display.update(result);
                }

                
                // if (type !== "NumberButton") {
                //     this.history.setHistory(this.operator);
                //     this.record.setRecordValue(this.operator);
                // }
            }
        }
    }
}