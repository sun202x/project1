class CalcBottomContents {
    constructor() {
        this.init();
    }

    init() {
        this.itemList = [];
        this.history = new CalcHistory();
    }

    render(parent) {
        this.history.render(parent);
        this.createCalcButton(parent);
    }

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

    storeSnapShot(operator) {
        this.history.store(operator.createSnapshot());
    }

    createCalcButton(parent) {
        let data = this.getData();
        const wrapperButton = document.createElement("div");
        wrapperButton.classList = "wrapper-button";

        data.forEach((item) => {
            const button = new CalcButton(item);

            this.itemList.push(button);
            button.render(wrapperButton);
        });

        parent.append(wrapperButton);
    }

    getItemList() {
        return this.itemList;
    }

    getTarget() {
        
    }

    toggleDisplay() {
        this.history.toggleDisplay();
    }

    hideDisplay() {
        this.history.hideDisplay();
    }
}