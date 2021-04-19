import HTMLComponent from './HTMLComponent.js';

export default class ComponentView extends HTMLComponent {

    getHtmlOption(data) {
        return {
            id: data.id,
            tagName: data.controlType,
            className: data.className,
            type: data.type,
            value: data.value,
            innerText: data.innerText,
            disabled: data.disabled,
            onclick: data.onclick,
            ["data-kind"]: data["data-kind"]
        };
    }

}