function Wrapper (options) {
    this.init(options);
    this.render();
}

Wrapper.prototype = {
    init: function (options) {
        this.el = null;
        this.class = options.class || "control";
        
    },

    render: function (options) {
        var body = document.body;
        var div = this.createWrapper();
        
    },

    createWrapper: function () {
        var div = document.createElement("div");
        div.className = "control";

        return div;
    },
}