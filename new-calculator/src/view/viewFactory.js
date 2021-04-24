import ComponentView from "./componentView.js";

export default class ViewFactory {
    static createInstance(data) {
        return new ComponentView();
    }

}