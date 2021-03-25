import CalcHtmlView from "./calcHtmlView.js";

export default class CalcView {
    constructor() {
        this.calcHtmlView = new CalcHtmlView();
    }

    render(viewData) {
        // clacView에서 실제 view에 필요한 데이터를 하나씩 가공하여 htmlView로 넘겨준다.
        // clacHtmlView에서는 넘겨받은 데이터를 각 view클래스에 전달하고 만들어진 element를 dom에 추가한다.
        // this.createViewItems(viewData);
        viewData.forEach((data) => {
            const body = document.body;
            const wrapper = this.calcHtmlView.createHtmlElement(data);
            const element = this.createViewItems(data, wrapper);

            body.append(element);
        });
    }

    createViewItems(datas, parent) {
        const items = datas.itemList;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemElement = this.calcHtmlView.createHtmlElement(item);

            if (item.itemList) {
                this.createViewItems(item, itemElement);
            }

            parent.append(itemElement);
        }

        return parent;
    }

    // createViewItems(viewDatas) {
    //     // 이건 우선 어떻게든 화면이 나오게 하려고 만든 코드임 > 한번쓰고 버려야되는 전형적인 쓰레기코드
    //     const body = document.body;

    //     for (let i = 0, len = viewDatas.length; i < len; i++ ) {
    //         const viewData = viewDatas[i];
    //         const wrapper = this.calcHtmlView.createHtmlElement(viewData);

    //         for (let j = 0; j < viewData.itemList.length; j++) {
    //             const childDatas = viewData.itemList[j];
    //             const wrapperChild = this.calcHtmlView.createHtmlElement(childDatas);
                
    //             for (let k = 0; k < childDatas.itemList.length; k++) {
    //                 const childData = childDatas.itemList[k];
    //                 const toolbar = this.calcHtmlView.createHtmlElement(childData);

    //                 for (let y = 0; y < childData.itemList.length; y++) {
    //                     const child = childData.itemList[y];
    //                     const control = this.calcHtmlView.createHtmlElement(child);

    //                     toolbar.append(control);
    //                 }
    //                 wrapperChild.append(toolbar);
    //             }
    //             wrapper.append(wrapperChild);
    //         }
    //         body.append(wrapper);
    //     }
    // }
}