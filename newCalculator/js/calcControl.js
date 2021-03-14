export default class CalcControl {
    constructor() {
        return {
            define: function(type, id) {
                const obj = { type: type, id: id };

                return {
                    value: function(value) {
                        obj.value = value;
                        return this;
                    },

                    label: function(label) {
                        obj.label = label;
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