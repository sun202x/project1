import CalcGenerator from "./calcGenerator.js";

export default class CalcControl extends CalcGenerator {
    constructor() {
        super();
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