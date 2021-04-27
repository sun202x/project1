import ViewFactory from './viewFactory.js';

export default class CalcHtmlView {

    viewItems;

    constructor(parentID) {
        this.rootInstance = null;
        this.parentID = parentID;
    }

    // HTMLComponent 상속받아서 처리하는게 맞다
    // viewData도 htmlview에 맞는 viewModel로 정의 필요
    render(viewData, state) {
        // @TODO update 로직 정리
        if (!this.viewItems) {
            const parent = document.querySelector(this.parentID);
            this.viewItems = [];

            for (let i = 0, len = viewData.length; i < len; i++) {
                const data = viewData[i];
                const view = CalcHtmlView.createView(data);
    
                this.viewItems.push(view);
    
                parent.append(view.render(data));
            }

        } else {
            viewData.forEach((data, index) => {
                let view = this.viewItems[index];
                
                if (!view) {
                    view = CalcHtmlView.createView(data);
                    this.viewItems.push(view);
                }

                view.render(data, state);
            });
        }
    }

    static createView(data) {
        return ViewFactory.createInstance(data);
    }

    getDomElement(id) {
        return document.querySelector("#" + id);
    }
}