// 순환참조 해결할때까지 잠시 보류
// import CalcGenerator from "./calcGenerator.js";

export class CalcButtonLayout {
    constructor() {
        super();
    }

    div() {
        const obj = {};
        obj.itemList = [];

        return {
            id: function(id) {
                obj.id = id;
                return this;
            },

            add: function(item) {
                obj.itemList.push(item);
                return this;
            },

            end: function() {
                obj.controlType = "div";
                return obj;
            }
        }
    }
}