class Page {
    constructor(items) {
        this.init(items);
        this.render();
    }

    init(items) {
        this.itemList = items;
    }

    render() {
        const body = document.body;
        const wrapper = this.createWrapper();

        this.itemList.forEach((item) => {
            const citem = new Control(item);
            citem.render(wrapper);

            body.appendChild(wrapper);
        });

        this.bindEvent();
    }

    createWrapper() {
        const wrapper = document.createElement("div");
        wrapper.className = "wrapper";
        wrapper.setAttribute("id", "wrapper");

        return wrapper;
    }

    bindEvent() {
        
    }
}