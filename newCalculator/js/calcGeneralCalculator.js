import Calculator from "./calculator.js";

export default class CalcGeneralCalculator extends Calculator {
    constructor() {
        super();
    }

    onInitContents() {
        const generator = this.calcGenerator;
        const wrapper = generator.div();
        const header = generator.div();
        const headerWrapper = generator.div();
        const contents = generator.div();
        const contentsWrapper1 = generator.div();
        const contentsWrapper2 = generator.div();
        const contentsWrapper3 = generator.div();
        const control = generator.control();

        wrapper.id("wrapper-calculator");

        /////////////////////// header ///////////////////////
        header.id("header");
        const toggle = control.define("button", "toggle-button")
            .label("토글")
            .value("토글")
            .type("button")
            .end();
        headerWrapper.add(toggle);

        const title = control.define("div", "title")
            .label("표준")
            .value("표준")
            .end();
        headerWrapper.add(title);

        const history = control.define("button", "history")
            .label("기록")
            .value("기록")
            .type("button")
            .end();
        headerWrapper.add(history);
        headerWrapper.id("wrapper-toolbar");

        header.add(headerWrapper.end());        
        wrapper.add(header.end());

        /////////////////////// contents ///////////////////////
        contents.id("contents");
        const record = control.define("div", "record")
            .end();
        contentsWrapper1.add(record);

        const display = control.define("div", "display")
            .label("0")
            .end();
        contentsWrapper1.add(display);
        contentsWrapper1.id("wrapper-display");
        contents.add(contentsWrapper1.end());

        // >>>>>>>>>>>> SUB Operator
        const topOperator1 = control.define("button", "mc")
            .label("MC")
            .value("MC")
            .type("top-operator")
            .end();
        contentsWrapper2.add(topOperator1);
        
        const topOperator2 = control.define("button", "mp")
            .label("M+")
            .value("M+")
            .type("top-operator")
            .end();
        contentsWrapper2.add(topOperator2);

        const topOperator3 = control.define("button", "mm")
            .label("M-")
            .value("M-")
            .type("top-operator")
            .end();
        contentsWrapper2.add(topOperator3);

        const topOperator4 = control.define("button", "ms")
            .label("MS")
            .value("MS")
            .type("top-operator")
            .end();
        contentsWrapper2.add(topOperator4);

        const topOperator5 = control.define("button", "mh")
            .label("MH")
            .value("MH")
            .type("top-operator")
            .end();
        contentsWrapper2.add(topOperator5);
        contentsWrapper2.id("wrapper-top-operator");
        contents.add(contentsWrapper2.end());

        // >>>>>>>>>>>> MAIN Operator
        const percent = control.define("button", "percent")
            .label("%")
            .value("%")
            .type("operator")
            .end();
        contentsWrapper3.add(percent);

        const clear = control.define("button", "clear")
            .label("CE")
            .value("CE")
            .type("operator")
            .end();
        contentsWrapper3.add(clear);

        const clearAll = control.define("button", "clearAll")
            .label("C")
            .value("C")
            .type("operator")
            .end();
        contentsWrapper3.add(clearAll);

        const backSapce = control.define("button", "backSapce")
            .label("<")
            .value("<")
            .type("operator")
            .end();
        contentsWrapper3.add(backSapce);

        const fountain = control.define("button", "fountain")
            .label("½")
            .value("½")
            .type("operator")
            .end();
        contentsWrapper3.add(fountain);

        const squared = control.define("button", "squared")
            .label("제곱")
            .value("제곱")
            .type("operator")
            .end();
        contentsWrapper3.add(squared);

        const root = control.define("button", "root")
            .label("루트")
            .value("루트")
            .type("operator")
            .end();
        contentsWrapper3.add(root);

        const division = control.define("button", "division")
            .label("/")
            .value("/")
            .type("operator")
            .end();
        contentsWrapper3.add(division);

        const number7 = control.define("button", "number7")
            .label("7")
            .value("7")
            .type("number")
            .end();
        contentsWrapper3.add(number7);

        const number8 = control.define("button", "number8")
            .label("8")
            .value("8")
            .type("number")
            .end();
        contentsWrapper3.add(number8);

        const number9 = control.define("button", "number9")
            .label("9")
            .value("9")
            .type("number")
            .end();
        contentsWrapper3.add(number9);

        const multiply = control.define("button", "multiply")
            .label("*")
            .value("*")
            .type("operator")
            .end();
        contentsWrapper3.add(multiply);

        const number4 = control.define("button", "number4")
            .label("4")
            .value("4")
            .type("number")
            .end();
        contentsWrapper3.add(number4);

        const number5 = control.define("button", "number5")
            .label("5")
            .value("5")
            .type("number")
            .end();
        contentsWrapper3.add(number5);

        const number6 = control.define("button", "number6")
            .label("6")
            .value("6")
            .type("number")
            .end();
        contentsWrapper3.add(number6);

        const minus = control.define("button", "minus")
            .label("-")
            .value("-")
            .type("operator")
            .end();
        contentsWrapper3.add(minus);

        const number1 = control.define("button", "number1")
            .label("1")
            .value("1")
            .type("number")
            .end();
        contentsWrapper3.add(number1);

        const number2 = control.define("button", "number2")
            .label("2")
            .value("2")
            .type("number")
            .end();
        contentsWrapper3.add(number2);

        const number3 = control.define("button", "number3")
            .label("3")
            .value("3")
            .type("number")
            .end();
        contentsWrapper3.add(number3);

        const plus = control.define("button", "plus")
            .label("+")
            .value("+")
            .type("operator")
            .end();
        contentsWrapper3.add(plus);

        const plusMinus = control.define("button", "plusMinus")
            .label("+/-")
            .value("+/-")
            .type("operator")
            .end();
        contentsWrapper3.add(plusMinus);

        const number0 = control.define("button", "number0")
            .label("0")
            .value("0")
            .type("number")
            .end();
        contentsWrapper3.add(number0);

        const dot = control.define("button", "dot")
            .label(".")
            .value(".")
            .type("operator")
            .end();
        contentsWrapper3.add(dot);

        const equal = control.define("button", "equal")
            .label("=")
            .value("=")
            .type("operator")
            .end();
        contentsWrapper3.add(equal);
        contentsWrapper3.id("wrapper-operator");

        contents.add(contentsWrapper3.end());
        wrapper.add(contents.end());

        return wrapper.end();
    }
}