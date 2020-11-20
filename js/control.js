function Control(options) {
    this.init(options);
}

Control.prototype = {
    init: function (options) {
        this.setControls(options);
    },

    render: function () {
        var body = document.body;
        var div = this.createWrapper();

        for (var i = 0, len = this.controlList.length; i < len; i++) {
            var control = this.controlList[i];
            var state = control.state;
            var dom = document.createElement(control.type);
            
            if (state.type === "radio") {
                var label = document.createElement("label");

                if (state.label) {
                    label.innerText = state.label;
                    label.setAttribute("for", state.id);
                }

                for (var key in state) {
                    dom.setAttribute(key, state[key]);
                }

                div.appendChild(dom);
                div.appendChild(label);
            } else {
                // control property settings
                for (var key in state) {
                    if (typeof state[key] === "function" && key.indexOf("on") > -1) {
                        var eventType = key.toLowerCase().substring(2);
                        dom.addEventListener(eventType, state[key].bind(this, arguments));
                    } else {
                        dom.setAttribute(key, state[key]);
                    }
                }
    
                // TODO 바꾸자
                if (state.label) {
                    dom.innerText = state.label;
                }

                div.appendChild(dom);
            }
        }

        body.appendChild(div);
    },

    createWrapper: function () {
        var div = document.createElement("div");
        div.className = "control";

        return div;
    },

    setControls: function (options) {
        this.controlList = options;
    },

    getControls: function () {
        return this.controlList;
    },

    setValue: function () {

    },
}