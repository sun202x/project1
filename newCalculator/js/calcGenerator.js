import CalcButtonLayout from "./calcButtonLayout.js";
import CalcControl from "./calcControl.js";

export default class CalcGenerator {
    constructor() {
        this.calcControl = new CalcControl();
        this.calcButtonLayout = new CalcButtonLayout();
    }
    
    define(type, id, value, label) {
        
    }
}