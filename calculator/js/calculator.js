class Calculator {
    constructor() {
        this.init();
        this.render();
        this.calcBindEvent();

        this.operator = new CalcOperator();
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
            const button = new Button(item.id, item.type, item.label);

            this.itemList.push(button);
            button.render(this.wrapper);
        });
    }

    // 별도의 파일로 만들어서 사용(json 형태), import사용
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

    getTarget(event) {
        return event.target.getAttribute("id");
    }

    calcBindEvent() {
        document.body.addEventListener('click', e => {
            this.onClick(e);   
        });
    }

    onClick(event) {
        // target 찾아서 해당 버튼 onclick 호출
        const display = document.getElementById("display");
        const target = this.itemList.find((button) => 
            button.id === this.getTarget(event)
        );

        if (target) {
            const result = this.operator.getCalcResult(target.type, target.label);

            if (result !== undefined) {
                display.value = result;
            }
        }
    }

    update() {

    }
    
}