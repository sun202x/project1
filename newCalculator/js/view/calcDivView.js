import HTMLComponent from './HTMLComponent.js';
import CalcHtmlView from './calcHtmlView.js';

export default class CalcDivView extends HTMLComponent {
    render(data) {
        const element = this.createHtmlElement({
            id: data.id,
            tagName: data.controlType,
            innerText: data.label
        });

        data.itemList?.forEach(item => {
            element.append(
                CalcHtmlView.createView(item)
            );
        });
    
        return element;
    }
}