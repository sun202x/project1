import HTMLComponent from './HTMLComponent.js';

export default class CalcDivView extends HTMLComponent {

    getHtmlOption(data) {
        return {
            innerText: data.label
        };
    }

    // render(data) {
    //     super.render(data);

    //     // element customizing
    //     this.element;
    // }

}