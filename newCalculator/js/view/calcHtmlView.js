import ViewFactory from './viewFactory.js';

export default class CalcHtmlView {
    constructor(options) {
        
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
}