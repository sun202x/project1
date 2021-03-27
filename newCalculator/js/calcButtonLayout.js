class CalcButtonLayout {
    constructor() {
        
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