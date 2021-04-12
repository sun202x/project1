// import CalcButtonLayout from "./calcButtonLayout.js";
// import CalcControl from "./calcControl.js";

export default class CalcGenerator {
    constructor() {
        // 구조 다시 정리 - 공통화 시키기
        // common prop - id, controlType, tagName
        // option porp - value, label, type
    }

    // 순환참조 해결할때까지 잠시 보류
    // define(type) {
    //     switch(type) {
    //         case "layout":
    //             return new CalcButtonLayout();
    //         case "control":
    //             return new CalcControl();
    //     }
    // }

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

    control() {
        return {
            define: function(controlType, id) {
                const obj = { controlType: controlType, id: id };

                return {
                    value: function(value) {
                        obj.value = value;
                        return this;
                    },
        
                    label: function(label) {
                        obj.label = label;
                        return this;
                    },

                    css: function (css) {
                        obj.css = css;
                        return this;                        
                    },

                    onclick: function(callback) {
                        obj.onclick = callback;
                        return this;
                    },

                    type: function(type) {
                        obj.type = type;
                        return this;
                    },
        
                    end: function () {
                        return obj;
                    }
                }
            }
        }
    }

}