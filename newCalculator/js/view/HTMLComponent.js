
export default class HTMLComponent {

    constructor() {

    }

    createHtmlElement(data) {
        const element = document.createElement(data.tagName);

        Object.keys(data).forEach(property => {
            // event
            if (property.indexOf('on') > -1) {
                // const eventName = property.replace('on', '');
                // element.addEventListener(eventName, data[property]);

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

}