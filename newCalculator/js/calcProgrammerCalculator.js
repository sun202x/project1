import Calculator from "./calculator.js";

export default class CalcProgrammerCalculator extends Calculator {
    constructor(parentID) {
        super(parentID);
    }

    onInitContents() {
        const generator = this.calcGenerator;
        const contents = generator.div();
        const displayWrap = generator.div();
        const notationWrap = generator.div();
        const notation1 = generator.div();
        const notation2 = generator.div();
        const notation3 = generator.div();
        const notation4 = generator.div();
        const topOperator = generator.div();
        const keypad = generator.div();
        const keypadHeader = generator.div();
        const keypadContents = generator.div();
        const control = generator.control();

        const record = control.define("div", "record")
            .end();
        displayWrap.add(record);

        const display = control.define("div", "display")
            .label("0")
            .end();
        displayWrap.add(display);
        displayWrap.id("wrapper-display");
        contents.add(displayWrap.end());

        const hex = control.define("button", "hex")
            .label("HEX")
            .value("HEX")
            .type("base-notation")
            .end();
        notation1.add(hex);
        const hexLabel = control.define("span", "hexLabel")
            .label("0")
            .type("hex-label")
            .end();
        notation1.add(hexLabel);
        notation1.css("notation-box");
        notationWrap.add(notation1.end());

        const dec = control.define("button", "dec")
            .label("DEC")
            .value("DEC")
            .type("base-notation")
            .end();
        notation2.add(dec);
        const decLabel = control.define("span", "decLabel")
            .label("0")
            .type("dec-label")
            .end();
        notation2.add(decLabel);
        notation2.css("notation-box");
        notationWrap.add(notation2.end());

        const oct = control.define("button", "oct")
            .label("OCT")
            .value("OCT")
            .type("base-notation")
            .end();
        notation3.add(oct);
        const octLabel = control.define("span", "octLabel")
            .label("0")
            .type("oct-label")
            .end();
        notation3.add(octLabel);
        notation3.css("notation-box");
        notationWrap.add(notation3.end());

        const bin = control.define("button", "bin")
            .label("BIN")
            .value("BIN")
            .type("base-notation")
            .end();
        notation4.add(bin);
        const binLabel = control.define("span", "binLabel")
            .label("0")
            .type("bin-label")
            .end();
        notation4.add(binLabel);
        notation4.css("notation-box");
        notationWrap.add(notation4.end());
        notationWrap.id("wrapper-notation");
        contents.add(notationWrap.end());

        const keyPad = control.define("button", "key-pad")
            .label("KEYPAD")
            .value("KEYPAD")
            .type("key-pad")
            .end();
        topOperator.add(keyPad);

        const bitPad = control.define("button", "bit-pad")
            .label("BITPAD")
            .value("BITPAD")
            .type("bit-pad")
            .end();
        topOperator.add(bitPad);

        const bitUnit = control.define("button", "bit-unit")
            .label("WORD")
            .value("WORD")
            .type("bit-unit")
            .end();
        topOperator.add(bitUnit);

        const memoryStorage = control.define("button", "memory-storage")
            .label("MS")
            .value("MS")
            .type("memory-storage")
            .end();
        topOperator.add(memoryStorage);

        const memoryHistory = control.define("button", "memory-history")
            .label("MH")
            .value("MH")
            .type("memory-history")
            .end();
        topOperator.add(memoryHistory);
        topOperator.id("wrapper-top-operator");
        contents.add(topOperator.end());

        const bitSelector = control.define("button", "bit-selector")
            .label("비트선택")
            .value("bit-selector")
            .type("select")
            .end();
        keypadHeader.add(bitSelector);

        const bitShift = control.define("button", "bit-shift")
            .label("비트시프트")
            .value("bit-shift")
            .type("select")
            .end();
        keypadHeader.add(bitShift);
        keypadHeader.id("keypad-header");
        keypad.add(keypadHeader.end());

        const a = control.define("button", "a")
            .label("A")
            .value("A")
            .type("operator")
            .end();
        keypadContents.add(a);

        const lsh = control.define("button", "lsh")
            .label("≪")
            .value("lsh")
            .type("operator")
            .end();
        keypadContents.add(lsh);

        const rsh = control.define("button", "rsh")
            .label("≫")
            .value("rsh")
            .type("operator")
            .end();
        keypadContents.add(rsh);

        const clear = control.define("button", "clear")
            .label("C")
            .value("C")
            .type("clearAll")
            .end();
        keypadContents.add(clear);

        const backSapce = control.define("button", "backSapce")
            .label("<")
            .value("<")
            .type("clear")
            .end();
        keypadContents.add(backSapce);

        const b = control.define("button", "b")
            .label("B")
            .value("B")
            .type("clear")
            .end();
        keypadContents.add(b);

        const leftBracket = control.define("button", "leftBracket")
            .label("(")
            .value("(")
            .type("operator")
            .end();
        keypadContents.add(leftBracket);

        const rightBracket = control.define("button", "rightBracket")
            .label(")")
            .value(")")
            .type("operator")
            .end();
        keypadContents.add(rightBracket);

        const percent = control.define("button", "percent")
            .label("%")
            .value("%")
            .type("operator")
            .end();
        keypadContents.add(percent);

        const division = control.define("button", "division")
            .label("/")
            .value("/")
            .type("operator")
            .end();
        keypadContents.add(division);

        const c = control.define("button", "c")
            .label("C")
            .value("C")
            .type("operator")
            .end();
        keypadContents.add(c);

        const number7 = control.define("button", "number7")
            .label("7")
            .value("7")
            .type("number")
            .end();
        keypadContents.add(number7);

        const number8 = control.define("button", "number8")
            .label("8")
            .value("8")
            .type("number")
            .end();
        keypadContents.add(number8);

        const number9 = control.define("button", "number9")
            .label("9")
            .value("9")
            .type("number")
            .end();
        keypadContents.add(number9);

        const multiply = control.define("button", "multiply")
            .label("*")
            .value("*")
            .type("operator")
            .end();
        keypadContents.add(multiply);

        const d = control.define("button", "d")
            .label("D")
            .value("D")
            .type("operator")
            .end();
        keypadContents.add(d);

        const number4 = control.define("button", "number4")
            .label("4")
            .value("4")
            .type("number")
            .end();
        keypadContents.add(number4);

        const number5 = control.define("button", "number5")
            .label("5")
            .value("5")
            .type("number")
            .end();
        keypadContents.add(number5);

        const number6 = control.define("button", "number6")
            .label("6")
            .value("6")
            .type("number")
            .end();
        keypadContents.add(number6);

        const minus = control.define("button", "minus")
            .label("-")
            .value("-")
            .type("operator")
            .end();
        keypadContents.add(minus);

        const e = control.define("button", "e")
            .label("E")
            .value("E")
            .type("operator")
            .end();
        keypadContents.add(e);

        const number1 = control.define("button", "number1")
            .label("1")
            .value("1")
            .type("number")
            .end();
        keypadContents.add(number1);

        const number2 = control.define("button", "number2")
            .label("2")
            .value("2")
            .type("number")
            .end();
        keypadContents.add(number2);

        const number3 = control.define("button", "number3")
            .label("3")
            .value("3")
            .type("number")
            .end();
        keypadContents.add(number3);

        const plus = control.define("button", "plus")
            .label("+")
            .value("+")
            .type("operator")
            .end();
        keypadContents.add(plus);

        const f = control.define("button", "f")
            .label("F")
            .value("F")
            .type("operator")
            .end();
        keypadContents.add(f);

        const plusMinus = control.define("button", "plusMinus")
            .label("+/-")
            .value("+/-")
            .type("operator")
            .end();
        keypadContents.add(plusMinus);

        const number0 = control.define("button", "number0")
            .label("0")
            .value("0")
            .type("number")
            .end();
        keypadContents.add(number0);

        const dot = control.define("button", "dot")
            .label(".")
            .value(".")
            .type("operator")
            .end();
        keypadContents.add(dot);

        const equal = control.define("button", "equal")
            .label("=")
            .value("=")
            .type("equal")
            .end();
        keypadContents.add(equal);
        keypadContents.id("keypad-contents");
        keypad.add(keypadContents.end());
        keypad.id("wrapper-operator-keypad");
        keypad.css("hidden");
        
        contents.add(keypad.end());

        const bitpad = generator.div();
        const bitPadBox1 = generator.div();
        const bitPadInner = generator.div();
        const bitPadLabel1 = generator.div();

        const bitPadBox2 = generator.div();
        const bitPadBox3 = generator.div();
        const bitPadBox4 = generator.div();
        const bitPadBox5 = generator.div();
        const bitPadBox6 = generator.div();
        const bitPadBox7 = generator.div();
        const bitPadBox8 = generator.div();
        const bitPadBox9 = generator.div();
        const bitPadBox10 = generator.div();
        const bitPadBox11 = generator.div();
        const bitPadBox12 = generator.div();
        const bitPadBox13 = generator.div();
        const bitPadBox14 = generator.div();
        const bitPadBox15 = generator.div();
        const bitPadBox16 = generator.div();
        const bitContents = generator.div();

        const aa = control.define("div")
            .label("0")
            .end();
        bitPadInner.add(aa);
        const aa1 = control.define("div")
            .label("0")
            .end();
        bitPadInner.add(aa1);
        const aa2 = control.define("div")
            .label("0")
            .end();
        bitPadInner.add(aa2);
        const aa3 = control.define("div")
            .label("0")
            .end();
        bitPadInner.add(aa3);
        bitPadInner.css("qwrod");
        bitPadBox1.add(bitPadInner.end());
        const label = control.define("div")
            .label("60")
            .end();
        bitPadBox1.add(label);
        bitPadBox1.css("bit-box");
        
        bitContents.add(bitPadBox1.end());
        bitContents.id("bitpad-contents");
        bitpad.add(bitContents.end());
        bitpad.id("wrapper-operator-bitpad");




        contents.add(bitpad.end());
        contents.id("contents");
        return contents.end();
    }
}