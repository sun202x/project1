import Calculator from './calculator.js';

class CalcLayout {
    constructor() {
        // this.historyDisplay
        this.calculator = new Calculator();
    }

    render() {
        const layout = document.createElement('div');
        layout.innerText = 'test';



        return layout;
    }

}

// console.log('hello');

const div = document.querySelector('#calc');
const layout = new CalcLayout();

div.append(layout.render());