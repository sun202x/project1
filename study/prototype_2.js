// new 키워드를 이용하여 객체를 만들 때 사용하는 함수를 생성자 함수라고 한다.
// 첫번째 문자는 대문자를 사용한다



// 1
// 생성자 함수를 new 키워드로 호출하게 되면 자바스크립트 내부 엔진에서는 this에 빈 객체를 할당하고 마지막에 생성 된 this를 반환해준다.
// 그렇기 때문에 new Person("mike")에서 반환한 this는 person에 담기게 된다.
function Person(name) {
    // this = {};
    this.name = name;
    // return this;
}
const person = new Person("mike");
console.log(person.name); // this == person



// 2
// 자바스크립트의 기본 타입은 생성자 함수를 갖고 있다
// 하지만 생성자 함수로 값을 생성할 필요가 없고, 리터럴 문법을 사용하여 값을 생성하도록 한다.
const obj = new Object({ a: 123 }); // {}
const arr = new Array(10, 20, 30); // []
const num = new Number(123);
const str = new String("abc");

console.log({ obj, arr, num, str });



// 3
// 자바스크립트에서의 모든 함수는 prototype속성을 갖게 된다.
// 즉 함수가 만들어 질 때 생성되는 [[prototype]] === __proto__과 prototype속성이 있다.
function Person(name) {
    this.name = name;
}
const person = new Person("mike");

console.log(Person.prototype);
// new 키워드로 생성 된 객체의 prototype은 생성자 함수의 prototype과 같다.
console.log(Object.getPrototypeOf(person) === Person.prototype); // Person.prototype == person.__proto__



// 4
// 함수의 prototype과 함수가 만들어 질 때 생성되는 prototype속성은 다르다.
function Person(name) {
    this.name = name;
}
const person = new Person("mike");

// 샘성자 함수 Person의 prototype은 Person.prototype속성 과는 다르다.
console.log(Object.getPrototypeOf(Person) !== Person.prototype); // Person 함수 !== Person.prototype 객체

// // new 키워드로 만들어진 객체의 prototype은 생성자 함수의 prototype 속성과 같다
// console.log(Object.getPrototypeOf(person) === Person.prototype);

// Person의 prototype속성은 Object의 prototype속성과 같다.
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);

// 생성자 함수 Person은 함수이기때문에 prototype은 생성자 함수인 Function의 prototype속성과 같다.
console.log(Object.getPrototypeOf(Person) === Function.prototype);

// 생성자 함수 Object는 함수이기때문에 prototype은 생성자 함수인 Function의 prototype속성과 같다
console.log(Object.getPrototypeOf(Object) === Function.prototype);

// Function의 prototype속성은 객체이기 떄문에 Object.prototype속성과 같다.
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);

// Object.prototype속성은 null과 같다(마지막). 모든 prototype 체인은 Object.prototype으로 모이게 된다.
console.log(Object.getPrototypeOf(Object.prototype) === null);



// 5
// 기본 타입을 리터럴 방법으로 생성해도 해당 생성자 함수의 prototype을 가르킨다.
// string과 number는 사실 객체가 아니지만 객체처럼(속성에 접근하는 문법 "num.???") 사용하면 해당 생성자 함수의 prototype을 참조하게 된다.
const obj = {}; // new Object()
const arr = []; // new Array()
const num = 123.456; // new Number(123.456)
const str = "abc";
console.log(Object.getPrototypeOf(obj) === Object.prototype);
console.log(Object.getPrototypeOf(arr) === Array.prototype);
console.log(Object.getPrototypeOf(num) === Number.prototype);
console.log(Object.getPrototypeOf(str) === String.prototype);
console.log(num.toFixed === Number.prototype.toFixed);
console.log(num.toFixed());



// 6
function Person(name) {
    this.name = name;
}
const person1 = new Person("mike");


const newPrototype = {
    values: [],
    push(value) {
        this.values.push(value);
    },
    getValues() {
        return this.values;
    }
};
Person.prototype = newPrototype; // Person.prototype속성(빈객체)에 새롭게 정의한 newPrototype할당
const person2 = new Person("jane");
console.log(Object.getPrototypeOf(person1)); // {} 참조
console.log(Object.getPrototypeOf(person2)); // newPrototype 참조
console.log(Object.getPrototypeOf(person1) !== newPrototype); // 빈객체를 참조하기 때문에 다르고
console.log(Object.getPrototypeOf(person2) === newPrototype); // prototype에 새롭게 만든 객체를 할당했기 때문에 같고

person2.push(1);
person2.push(2);
console.log(person2.getValues());


// 7
function Person(name) {
    this.name = name;
    this._salary = 0;

    // 생성자 함수내부에서 함수 정의
    this.setSalary = function(salary) {
        this._salary = Math.max(0, Math.min(1000, salary));
    };
    this.getSalary = function() {
        return this._salary;
    };
}
// Person 생성자 함수를 이용하여 객체를 만들 때 마다 함수내부에 정의해 놓은 함수가 반복적으로 생성되어 메모리에 비효율적이다.
const person1 = new Person("mike");
person1.setSalary(2000);
console.log(person1.getSalary());

const person2 = new Person("jane");
// 동일한 생성자 함수를 이용하여 만든 객체임에도 불구하고 각각 함수가 존재하고, 서로 다르다는것을 알 수 있다.
console.log(person1.getSalary !== person2.getSalary);


// 8
function Person(name) {
    this.name = name;
    this._salary = 0;
}

// 이렇게 prototype객체에 메소드를 정의하게 되면
// 생성자 함수를 이용하여 만든 객체는 prototype객체의 메소드를 참조하게 되고 메모리도 효율적으로 관리할 수 있게 된다.
Person.prototype = {
    setSalary(salary) {
        this._salary = Math.max(0, Math.min(1000, salary));
    },
    getSalary() {
        return this._salary;
    }
};
const person1 = new Person("mike");
person1.setSalary(2000);
console.log(person1.getSalary());

const person2 = new Person("jane");
console.log(person1.getSalary === person2.getSalary);


// 9
function Person(name) {
    this.name = name;
}

console.log(Person.prototype.constructor === Person);
console.log(Person.constructor === Function);


// 10
function Person() {
    this.sayHello = function() {
        console.log("hello");
    };
}
function Animal() {
    this.sayHello = function() {
        console.log("hm...");
    };
}
// 생성자 함수를 모르는 상황에서는 constructor를 사용하여 같은 객체를 생성할 수 있다.
// 아래 함수의 obj는 어떠한 생생자 함수를 이용하여 만들어 졌는지 알 수 없기 때문에,
// 파라미터로 받은 obj의 constructor를 반환하게 되면 obj의 생성자 함수를 가르키기 때문에 같은 객체를 생성할 수 있게 된다.
function makeInstanceOf(obj) {
    return new obj.constructor();
}
const person = new Person();
const animal = new Animal();
const newInst = makeInstanceOf(person);
newInst.sayHello();