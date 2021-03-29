import HTMLComponent from './HTMLComponent.js';

export default class CalcButtonView extends HTMLComponent {
    render(data) {
        const element = this.createHtmlElement({
            tagName: data.controlType,
            type: data.type,
            id: data.id,
            value: data.value,
            innerText: data.label,
            onclick: data.onclick
        });
    
        return element;
    }
}