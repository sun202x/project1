import ViewFactory from './viewFactory.js';

export default class CalcHtmlView {
    constructor(options) {
        this.rootInstance = null;
    }

    render(viewData) {
        const parent = document.body;

        for (let i = 0, len = viewData.length; i < len; i++) {
            const data = viewData[i];

            parent.append(CalcHtmlView.createView(data));
        }
    }

    static createView(data) {
        const view = ViewFactory.createInstance(data);
        
        return view.render(data);
    }

    // update를 이곳에서 하는게 맞는가???
    // 각 component단위로 나눠놓은 곳에서 업데이트를 해야하지 않을까??
    updateView(target, value) {
        const dom = document.querySelector("#" + target.id);

        if (dom.innerText === "0") {
            dom.innerText = value;
        } else {
            dom.innerText += value;
        }
    }

    // updateView(element, container) {
    //     // 참조사이트
    //     // https://github.com/sun202x/study_didact - 흥식대원군 Github
    //     // https://velog.io/@wickedev/%EB%B2%88%EC%97%AD-Didact-DOM-%EC%9A%94%EC%86%8CElements-%EB%A0%8C%EB%8D%94%EB%A7%81%ED%95%98%EA%B8%B0 - 양형 Github
    //     // didact 응용해서 프로젝트에 맞는 형태로 변환해야함


    //     // reconciliation 먼저 구현해서 어떤식으로 흘러가는지 파악하기
    //     // https://github.com/sun202x/study_didact/blob/main/public/src/reconciliation.js


    //     const parentDom = CalcHtmlView.createView(container);
    //     const prevInstance = this.rootInstance;
    //     const nextInstance = this.reconcile(parentDom, prevInstance, element);
    //     this.rootInstance = nextInstance;
    // }

    // reconcile(parentDom, instance, element) {
    //     if (instance == null) {
    //         // instance 생성
    //         const newInstance = this.instantiate(element);
    //         parentDom.appendChild(newInstance.dom);
    //         return newInstance;
    //     } else if (element == null) {
    //         // instance 삭제
    //         parentDom.removeChild(instance.dom);
    //         return null;
    //     } else if (instance.element.controlType !== element.controlType) {
    //         // instance 변경
    //         const newInstance = this.instantiate(element);
    //         parentDom.replaceChild(newInstance.dom, instance.dom);
    //         return newInstance;
    //     } else if (typeof element.controlType === "string") {
    //         // instance 업데이트
    //         this.updateDomProperties(instance.dom, instance.element, element);
    //         instance.childInstances = this.reconcileChildren(instance, element);
    //         instance.element = element;
    //         return instance;
    //     } else {
    //         instance.publicInstance = element;
    //     }
    // }

    // reconcileChildren(instance, element) {
    //     const dom = instance.dom;
    //     const childInstances = instance.childInstances;
    //     const nextChildElements = element.itemList || [];
    //     const newChildInstance = [];
    //     const count = Math.max(childInstances.length, nextChildElements.length);

    //     for (let i = 0; i < count.length; i++) {
    //         const childInstance = childInstances[i];
    //         const childElement = nextChildElements[i];
    //         const newChildInstance = this.reconcile(com, childInstance, childElement);
    //         newChildInstance.push(newChildInstance);
    //     }

    //     return newChildInstances.filter(instance => instance != null);
    // }

    // instantiate(element) {
    //     // type = element.type / props = element.props
    //     // const { controlType, id } = element;
    //     const instance = {};
    //     const publicInstance = this.createPublicInstance(element, instance);
    //     const childElement = publicInstance
    //     const dom = publicInstance;
    //     const childInstance = this.instantiate(childElement);

    //     Object.assign(instance, { dom, element, publicInstance });
    //     return instance;
    // }


    // createPublicInstance(element, internalInstance) {
    //     const publicInstance = CalcHtmlView.createView(element);

    //     // publicInstance.__internalInstance = internalInstance;
    //     return publicInstance;
    // }

    // updateDomProperties(dom, prevProps, nextProps) {
    //     const isEvent = name => name.startsWith("on");
    //     const isAttribute = name => !isEvent(name) && name != "children";

    //     // Remove event listeners
    //     Object.keys(prevProps).filter(isEvent).forEach(name => {
    //         const eventType = name.replace('on', '');
    //         dom.removeEventListener(eventType, prevProps[name]);
    //     });

    //     // Remove attributes
    //     Object.keys(prevProps).filter(isAttribute).forEach(name => {
    //         dom[name] = null;
    //     });

    //     // Set attributes
    //     Object.keys(nextProps).filter(isAttribute).forEach(name => {
    //         dom[name] = nextProps[name];
    //     });

    //     // Add event listeners
    //     Object.keys(nextProps).filter(isEvent).forEach(name => {
    //         const eventType = name.replace("on", '');
    //         dom.addEwqventListener(eventType, nextProps[name]);
    //     });
    // }

}