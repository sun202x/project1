import Calculator from "./calculator.js";
import CalcProgrammerOperator from "./calcProgrammerOperator.js";

export default class CalcProgrammerCalculator extends Calculator {
    constructor(parentID) {
        super(parentID);
        this.calcProgrammerOperator = new CalcProgrammerOperator();
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
        const bitpad = generator.div();
        const bitPadBox1 = generator.div();
        const bitPadBox1Inner = generator.div();
        const bitPadBox2 = generator.div();
        const bitPadBox2Inner = generator.div();
        const bitPadBox3 = generator.div();
        const bitPadBox3Inner = generator.div();
        const bitPadBox4 = generator.div();
        const bitPadBox4Inner = generator.div();
        const bitPadBox5 = generator.div();
        const bitPadBox5Inner = generator.div();
        const bitPadBox6 = generator.div();
        const bitPadBox6Inner = generator.div();
        const bitPadBox7 = generator.div();
        const bitPadBox7Inner = generator.div();
        const bitPadBox8 = generator.div();
        const bitPadBox8Inner = generator.div();
        const bitPadBox9 = generator.div();
        const bitPadBox9Inner = generator.div();
        const bitPadBox10 = generator.div();
        const bitPadBox10Inner = generator.div();
        const bitPadBox11 = generator.div();
        const bitPadBox11Inner = generator.div();
        const bitPadBox12 = generator.div();
        const bitPadBox12Inner = generator.div();
        const bitPadBox13 = generator.div();
        const bitPadBox13Inner = generator.div();
        const bitPadBox14 = generator.div();
        const bitPadBox14Inner = generator.div();
        const bitPadBox15 = generator.div();
        const bitPadBox15Inner = generator.div();
        const bitPadBox16 = generator.div();
        const bitPadBox16Inner = generator.div();
        const bitContents = generator.div();
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
            .onclick(this.changeKeyPad.bind(this))
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
            .onclick(this.changeKeyPad.bind(this))
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
            .onclick(this.changeKeyPad.bind(this))
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
            .onclick(this.changeKeyPad.bind(this))
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
            .onclick(this.toggleKeyPad.bind(this))
            .end();
        topOperator.add(keyPad);

        const bitPad = control.define("button", "bit-pad")
            .label("BITPAD")
            .value("BITPAD")
            .type("bit-pad")
            .onclick(this.toggleKeyPad.bind(this))
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
            .type("number")
            .kind("hex")
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
            .onclick(this.onClick.bind(this))
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
            .type("number")
            .kind("hex")
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
            .type("number")
            .kind("hex")
            .end();
        keypadContents.add(c);

        const number7 = control.define("button", "number7")
            .label("7")
            .value("7")
            .type("number")
            .kind("oct")
            .onclick(this.onClick.bind(this))
            .end();
        keypadContents.add(number7);

        const number8 = control.define("button", "number8")
            .label("8")
            .value("8")
            .type("number")
            .kind("dec")
            .onclick(this.onClick.bind(this))
            .end();
        keypadContents.add(number8);

        const number9 = control.define("button", "number9")
            .label("9")
            .value("9")
            .type("number")
            .kind("dec")
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
            .type("number")
            .kind("hex")
            .end();
        keypadContents.add(d);

        const number4 = control.define("button", "number4")
            .label("4")
            .value("4")
            .type("number")
            .kind("oct")
            .end();
        keypadContents.add(number4);

        const number5 = control.define("button", "number5")
            .label("5")
            .value("5")
            .type("number")
            .kind("oct")
            .end();
        keypadContents.add(number5);

        const number6 = control.define("button", "number6")
            .label("6")
            .value("6")
            .type("number")
            .kind("oct")
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
            .type("number")
            .kind("hex")
            .end();
        keypadContents.add(e);

        const number1 = control.define("button", "number1")
            .label("1")
            .value("1")
            .type("number")
            .kind("bin")
            .end();
        keypadContents.add(number1);

        const number2 = control.define("button", "number2")
            .label("2")
            .value("2")
            .type("number")
            .kind("oct")
            .end();
        keypadContents.add(number2);

        const number3 = control.define("button", "number3")
            .label("3")
            .value("3")
            .type("number")
            .kind("oct")
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
            .type("number")
            .kind("hex")
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
            .kind("bin")
            .end();
        keypadContents.add(number0);

        const dot = control.define("button", "dot")
            .label(".")
            .value(".")
            .type("operator")
            .disabled(true)
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
        contents.add(keypad.end());

        bitPadBox1Inner.add(control.define("span").label("0").end());
        bitPadBox1Inner.add(control.define("span").label("0").end());
        bitPadBox1Inner.add(control.define("span").label("0").end());
        bitPadBox1Inner.add(control.define("span").label("0").end());
        bitPadBox1Inner.css("qwrod");
        bitPadBox1.add(bitPadBox1Inner.end());
        bitPadBox1.add(control.define("div").label("60").end());
        bitPadBox1.css("bit-box");
        bitContents.add(bitPadBox1.end());

        bitPadBox2Inner.add(control.define("span").label("0").end());
        bitPadBox2Inner.add(control.define("span").label("0").end());
        bitPadBox2Inner.add(control.define("span").label("0").end());
        bitPadBox2Inner.add(control.define("span").label("0").end());
        bitPadBox2Inner.css("qwrod");
        bitPadBox2.add(bitPadBox2Inner.end());
        bitPadBox2.add(control.define("div").label("56").end());
        bitPadBox2.css("bit-box");
        bitContents.add(bitPadBox2.end());

        bitPadBox3Inner.add(control.define("span").label("0").end());
        bitPadBox3Inner.add(control.define("span").label("0").end());
        bitPadBox3Inner.add(control.define("span").label("0").end());
        bitPadBox3Inner.add(control.define("span").label("0").end());
        bitPadBox3Inner.css("qwrod");
        bitPadBox3.add(bitPadBox3Inner.end());
        bitPadBox3.add(control.define("div").label("52").end());
        bitPadBox3.css("bit-box");
        bitContents.add(bitPadBox3.end());

        bitPadBox4Inner.add(control.define("span").label("0").end());
        bitPadBox4Inner.add(control.define("span").label("0").end());
        bitPadBox4Inner.add(control.define("span").label("0").end());
        bitPadBox4Inner.add(control.define("span").label("0").end());
        bitPadBox4Inner.css("qwrod");
        bitPadBox4.add(bitPadBox4Inner.end());
        bitPadBox4.add(control.define("div").label("48").end());
        bitPadBox4.css("bit-box");
        bitContents.add(bitPadBox4.end());

        bitPadBox5Inner.add(control.define("span").label("0").end());
        bitPadBox5Inner.add(control.define("span").label("0").end());
        bitPadBox5Inner.add(control.define("span").label("0").end());
        bitPadBox5Inner.add(control.define("span").label("0").end());
        bitPadBox5Inner.css("qwrod");
        bitPadBox5.add(bitPadBox5Inner.end());
        bitPadBox5.add(control.define("div").label("44").end());
        bitPadBox5.css("bit-box");
        bitContents.add(bitPadBox5.end());

        bitPadBox6Inner.add(control.define("span").label("0").end());
        bitPadBox6Inner.add(control.define("span").label("0").end());
        bitPadBox6Inner.add(control.define("span").label("0").end());
        bitPadBox6Inner.add(control.define("span").label("0").end());
        bitPadBox6Inner.css("qwrod");
        bitPadBox6.add(bitPadBox6Inner.end());
        bitPadBox6.add(control.define("div").label("40").end());
        bitPadBox6.css("bit-box");
        bitContents.add(bitPadBox6.end());

        bitPadBox7Inner.add(control.define("span").label("0").end());
        bitPadBox7Inner.add(control.define("span").label("0").end());
        bitPadBox7Inner.add(control.define("span").label("0").end());
        bitPadBox7Inner.add(control.define("span").label("0").end());
        bitPadBox7Inner.css("qwrod");
        bitPadBox7.add(bitPadBox7Inner.end());
        bitPadBox7.add(control.define("div").label("36").end());
        bitPadBox7.css("bit-box");
        bitContents.add(bitPadBox7.end());

        bitPadBox8Inner.add(control.define("span").label("0").end());
        bitPadBox8Inner.add(control.define("span").label("0").end());
        bitPadBox8Inner.add(control.define("span").label("0").end());
        bitPadBox8Inner.add(control.define("span").label("0").end());
        bitPadBox8Inner.css("qwrod");
        bitPadBox8.add(bitPadBox8Inner.end());
        bitPadBox8.add(control.define("div").label("32").end());
        bitPadBox8.css("bit-box");
        bitContents.add(bitPadBox8.end());

        bitPadBox9Inner.add(control.define("span").label("0").end());
        bitPadBox9Inner.add(control.define("span").label("0").end());
        bitPadBox9Inner.add(control.define("span").label("0").end());
        bitPadBox9Inner.add(control.define("span").label("0").end());
        bitPadBox9Inner.css("dword");
        bitPadBox9.add(bitPadBox9Inner.end());
        bitPadBox9.add(control.define("div").label("28").end());
        bitPadBox9.css("bit-box");
        bitContents.add(bitPadBox9.end());

        bitPadBox10Inner.add(control.define("span").label("0").end());
        bitPadBox10Inner.add(control.define("span").label("0").end());
        bitPadBox10Inner.add(control.define("span").label("0").end());
        bitPadBox10Inner.add(control.define("span").label("0").end());
        bitPadBox10Inner.css("dword");
        bitPadBox10.add(bitPadBox10Inner.end());
        bitPadBox10.add(control.define("div").label("24").end());
        bitPadBox10.css("bit-box");
        bitContents.add(bitPadBox10.end());

        bitPadBox11Inner.add(control.define("span").label("0").end());
        bitPadBox11Inner.add(control.define("span").label("0").end());
        bitPadBox11Inner.add(control.define("span").label("0").end());
        bitPadBox11Inner.add(control.define("span").label("0").end());
        bitPadBox11Inner.css("dword");
        bitPadBox11.add(bitPadBox11Inner.end());
        bitPadBox11.add(control.define("div").label("20").end());
        bitPadBox11.css("bit-box");
        bitContents.add(bitPadBox11.end());

        bitPadBox12Inner.add(control.define("span").label("0").end());
        bitPadBox12Inner.add(control.define("span").label("0").end());
        bitPadBox12Inner.add(control.define("span").label("0").end());
        bitPadBox12Inner.add(control.define("span").label("0").end());
        bitPadBox12Inner.css("dword");
        bitPadBox12.add(bitPadBox12Inner.end());
        bitPadBox12.add(control.define("div").label("16").end());
        bitPadBox12.css("bit-box");
        bitContents.add(bitPadBox12.end());

        bitPadBox13Inner.add(control.define("span").label("0").end());
        bitPadBox13Inner.add(control.define("span").label("0").end());
        bitPadBox13Inner.add(control.define("span").label("0").end());
        bitPadBox13Inner.add(control.define("span").label("0").end());
        bitPadBox13Inner.css("word");
        bitPadBox13.add(bitPadBox13Inner.end());
        bitPadBox13.add(control.define("div").label("12").end());
        bitPadBox13.css("bit-box");
        bitContents.add(bitPadBox13.end());

        bitPadBox14Inner.add(control.define("span").label("0").end());
        bitPadBox14Inner.add(control.define("span").label("0").end());
        bitPadBox14Inner.add(control.define("span").label("0").end());
        bitPadBox14Inner.add(control.define("span").label("0").end());
        bitPadBox14Inner.css("word");
        bitPadBox14.add(bitPadBox14Inner.end());
        bitPadBox14.add(control.define("div").label("8").end());
        bitPadBox14.css("bit-box");
        bitContents.add(bitPadBox14.end());

        bitPadBox15Inner.add(control.define("span").label("0").end());
        bitPadBox15Inner.add(control.define("span").label("0").end());
        bitPadBox15Inner.add(control.define("span").label("0").end());
        bitPadBox15Inner.add(control.define("span").label("0").end());
        bitPadBox15Inner.css("byte");
        bitPadBox15.add(bitPadBox15Inner.end());
        bitPadBox15.add(control.define("div").label("4").end());
        bitPadBox15.css("bit-box");
        bitContents.add(bitPadBox15.end());

        bitPadBox16Inner.add(control.define("span").label("0").end());
        bitPadBox16Inner.add(control.define("span").label("0").end());
        bitPadBox16Inner.add(control.define("span").label("0").end());
        bitPadBox16Inner.add(control.define("span").label("0").end());
        bitPadBox16Inner.css("byte");
        bitPadBox16.add(bitPadBox16Inner.end());
        bitPadBox16.add(control.define("div").label("0").end());
        bitPadBox16.css("bit-box");
        bitContents.add(bitPadBox16.end());

        bitContents.id("bitpad-contents");
        bitpad.add(bitContents.end());
        bitpad.id("wrapper-operator-bitpad");
        bitpad.css("hide");

        contents.add(bitpad.end());
        contents.id("contents");
        return contents.end();
    }

    onClickHanldler(value) {
        this.setLabel("display", value.hex);
        this.setLabel("hexLabel", value.hex);
        this.setLabel("decLabel", value.dec);
        this.setLabel("octLabel", value.oct);
        this.setLabel("binLabel", value.bin);
    }

    onClick(e) {
        // 프로그래머용 계산기는 객체형태로 값을 받아야함 - 진수변환때문에
        const target = this.getControl(e.target.id);
        const value = this.calcProgrammerOperator.getCalcResult(target);

        if (target.type === "equal") {
            this.historyData.push(this.calcProgrammerOperator.createSnapshot());
        }

        // viewModel update
        this.onClickHanldler(value);
    }

    toggleKeyPad(e) {
        const value = e.target.value;
        const keypad = "wrapper-operator-keypad";
        const bitpad = "wrapper-operator-bitpad";

        if (value === "KEYPAD") {
            this.showDisplay(keypad);
            this.hideDisplay(bitpad);
        } else {
            this.showDisplay(bitpad);
            this.hideDisplay(keypad);
        }
    }

    getReadOnlyItems(type) {
        // return this.find(this.getItems(), function (item) {
        //     if (item["data-kind"] === type.toLowerCase()) {
        //         console.log(item);
        //     }
        // });

        if (type == "hex") {
            item.disabled = false;
        } else if (type == "dec") {
            if (item.id == "a" || item.id == "b") {
                item.disabled = true;
            }
        } else if (type == "oct") {
            if (item.id == "7" || item.id == "8") {
                item.disabled = true;
            }
        } else if (type == "bin") {
            if (item.id == "0" || item.id == "1") {
                item.disabled = false
            }
        }
    }

    changeKeyPad(e) {
        const valueType = e.target.value;
        const value = this.calcProgrammerOperator.currentValue;
        const display = "display";
        const items = this.getReadOnlyItems(valueType);

        switch(valueType) {
            case "HEX":
                this.setLabel(display, value.hex);
                break;
            case "DEC":
                this.setLabel(display, value.dec);
                break;
            case "OCT":
                this.setLabel(display, value.oct);
                break;
            case "BIN":
                this.setLabel(display, value.bin);
        }
    }

}