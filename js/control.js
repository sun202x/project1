function Control(options) {
    this.render(options);
}

Control.prototype = {
    render: function (options) {
        var body = document.body;
        var div = this.createWrapper();
        var controlList = options;

        for (var i = 0, len = controlList.length; i < len; i++) {
            var control = controlList[i];
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


    setValue: function () {

    },
}