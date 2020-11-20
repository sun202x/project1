function Page (options) {
    this.init(options);
}

Page.prototype = {
    init: function (options) {
        this.el = null;
        this.itemList = [];
        this.oninitContents = options.oninitContents;
    },

    render: function () {
        this.createContents();
    },

    createContents: function () {
        var contents = [];
        this.oninitContents(contents);

        debugger;
    },
}