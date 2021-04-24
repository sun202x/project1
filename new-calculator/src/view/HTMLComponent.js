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

    renderChildren(children, state) {
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
                    childView.render(child, state);
                }
            });
        }
    }

    reconciliation = (data, state) => {
        if (data.controlType !== this.oldState?.controlType) {
            const options = this.getHtmlOption(data);
            this.element = this.createHtmlElement(options);
        }

        // 자식 랜더링
        this.renderChildren(data.itemList, state);

        // @TODO 공통화 필요
        if (this.oldState) {
            if (this.oldState[state] !== data[state]) {
                this.element[state] = data[state];
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
            } else if (property === "className") {
                (data[property] !== undefined) ? element.className = data[property] : "";
            } else if (property === "disabled") {
                (data[property]) ? element.setAttribute(property, data[property]) : element.removeAttribute(data[property]);
            } else {
                if (!['tagName', 'itemList'].includes(property)) {
                    (data[property] !== undefined) ? element.setAttribute(property, data[property]) : "";
                }
            }
        });
        
        return element;
    }

    render(data, state) {
        this.reconciliation(data, state);

        return this.element;
    }

}