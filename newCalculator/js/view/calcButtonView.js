import HTMLComponent from './HTMLComponent.js';

export default class CalcButtonView extends HTMLComponent {

    getHtmlOption(data) {
        return {
            type: data.type,
            value: data.value,
            innerText: data.label,
            onclick: data.onclick
        };
    }

}