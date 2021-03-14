export default class CalcButtonLayout {
    constructor() {
        const obj = {};

        return {
            add: function(item) {
                obj.itemList = [];
                obj.itemList.push(item);
                return obj;
            }
        }
    }
}