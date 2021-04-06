class Didact {
    constructor() {
        this.TEXT_ELEMENT = "TEXT ELEMENT";
        this.rootInstance = null;
    }

    render(element, container) {
        const prevInstance = this.rootInstance;
        const nextInstance = this.reconcile(container, prevInstance, element);
        this.rootInstance = nextInstance;
    }

    reconcile(parentDom, instance, element) {
        if (instance == null) {
            const newInstance = this.instantiate(element);
            parentDom.appendChild(newInstance.dom);
        }

    }

    reconcileChildren() {}

    instantiate(element) {
        const { type, props } = element;

        const isTextElement = type === this.TEXT_ELEMENT;
        const dom = isTextElement ? document.createTextNode("") : document.createElement(type);
    }

    updateDomProperties() {}

    createElement() {}

    createTextElement() {}
}
