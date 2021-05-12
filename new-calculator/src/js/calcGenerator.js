// import CalcButtonLayout from "./calcButtonLayout.js";
// import CalcControl from "./calcControl.js";

export default class CalcGenerator {
    div() {
        const obj = {};
        obj.itemList = [];

        return {
            id: function (id) {
                obj.id = id;
                return this;
            },

            add: function (item) {
                obj.itemList.push(item);
                return this;
            },

            css: function (css) {
                obj.className = css;
                return this;
            },

            end: function () {
                obj.controlType = "div";
                return obj;
            },
        };
    }

    control() {
        return {
            define: function (controlType, id) {
                const obj = { controlType: controlType, id: id };

                return {
                    value: function (value) {
                        obj.value = value;
                        return this;
                    },

                    label: function (label) {
                        obj.innerText = label;
                        return this;
                    },

                    css: function (css) {
                        obj.className = css;
                        return this;
                    },

                    disabled: function (flag) {
                        obj.disabled = flag;
                        return this;
                    },

                    onclick: function (callback) {
                        obj.onclick = callback;
                        return this;
                    },

                    type: function (type) {
                        obj.type = type;
                        return this;
                    },

                    kind: function (type) {
                        obj["data-kind"] = type;
                        return this;
                    },

                    end: function () {
                        return obj;
                    },
                };
            },
        };
    }
}

class ButtonGenerator {
    constructor(controlType, id) {
        this.obj = {};
        this.obj.controlType = controlType;
        this.obj.id = id;
    }

    value(value) {
        this.obj.value = value;
    }

    label(label) {
        this.obj.label = label;
    }

    end() {
        return this.obj;
    }
}
