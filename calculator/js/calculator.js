class Calculator {
    constructor() {
        this.init();
        this.render();
        this.calcBindEvent();
    }

    init() {
        this.wrapper = document.body;
        this.operator = new CalcOperator();
        this.bottomContents = new CalcBottomContents();
        this.record = new CalcRecord();
        this.display = new CalcDisplay();
    }

    render() {
        this.createCalculator();
    }

    createCalculator() {
        this.record.render(this.wrapper);
        this.display.render(this.wrapper);
        this.bottomContents.render(this.wrapper);
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
            this.bottomContents.toggleDisplay();
            return;
        } else if (this.getTarget(event) && this.getTarget(event).indexOf("list") > -1) {
            // 기록보기에서 가져온 데이터 display에 업데이트
            const getId = this.getTarget(event).split("list").pop();
            const historyData = this.history.getHistoryData(getId);

            this.record.setRecordValue(historyData.value);
            this.display.update(historyData.totalValue);
        } else {
            const target = this.bottomContents.getItemList().find((button) => button.id === this.getTarget(event));
            
            if (target) {
                const result = this.operator.getCalcResult(target);
                const type = target.type;
                
                if (type !== "NumberButton") {
                    this.record.setRecordValue(this.operator);
                }
                
                if (type === "Equal") {
                    this.bottomContents.storeSnapShot(this.operator);
                }
                
                if (result !== undefined) {
                    this.display.update(result);
                }
            }
        }

        this.bottomContents.hideDisplay();
    }
}