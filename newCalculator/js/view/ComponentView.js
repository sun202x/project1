import HTMLComponent from './HTMLComponent.js';

export default class ComponentView extends HTMLComponent {

    getHtmlOption(data) {
        return {
            id: data.id,
            tagName: data.controlType,
            css: data.css,
            type: data.type,
            value: data.value,
            innerText: data.label,
            onclick: data.onclick
        };
    }

}