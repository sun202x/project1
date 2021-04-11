import CalcHtmlView from './calcHtmlView.js';

export default class HTMLComponent {

    element;
    children;
    oldState;

    constructor() {

    }

    addChildView = (childView) => {
        if (!this.children) {
            this.children = [childView];
        } else {
            this.children.push(childView);
        }
    }

    renderChildren(children) {
        if (!children) {
            this.element.innerHtml = '';
        } else {
            children.forEach((child, index) => {
                let childView = this.children?.[index];

                if (!childView) {
                    childView = CalcHtmlView.createView(child);
                    this.addChildView(childView);
                    this.element.append(
                        childView.render(child)
                    );
                } else {
                    childView.render(child);
                }
            });
        }
    }

    reconciliation = (data) => {
        if (data.controlType !== this.oldState?.controlType) {
            this.element = this.createHtmlElement(
                {
                    id: data.id,
                    tagName: data.controlType,
                    ...this.getHtmlOption(data)
                }
            );
        }

        // 자식 렌더링
        this.renderChildren(data.itemList);

        // @TODO 공통화 필요
        if (this.oldState) {
            if (this.oldState.label !== data.label) {
                this.element.innerText = data.label;
            }
        }

        this.oldState = { ...data };
    }

    createHtmlElement(data) {
        const element = document.createElement(data.tagName);

        Object.keys(data).forEach(property => {
            // event
            if (property.indexOf('on') > -1) {
                const eventName = property.replace('on', '');
                element.addEventListener(eventName, data[property]);
            } else if (property === 'innerText') {
                element.innerText = data[property] ?? '';
            } else {
                if (!['tagName', 'itemList'].includes(property)) {
                    element.setAttribute(property, data[property]);
                }
            }
        });
        
        return element;
    }

    render(data) {
        this.reconciliation(data);

        return this.element;
    }

}