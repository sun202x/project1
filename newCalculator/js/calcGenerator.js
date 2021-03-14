import CalcButtonLayout from "./calcButtonLayout.js";
import CalcControl from "./calcControl.js";

export default class CalcGenerator {
    constructor() {
        this.calcButtonLayout = new CalcButtonLayout();
        this.calcControl = new CalcControl();
    }
}