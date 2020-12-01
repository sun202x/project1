// 생성자 함수
// 자바스크립트에서의 모든 함수는 prototype속성을 갖게 된다.
// 즉 함수가 만들어 질 때 생성되는 [[prototype]]과 [[prototype속성]]이 있다.
function Person() {
    // this = {};
    this.name = name;
    // return this;
}

// 이처럼 생성자 함수를 new 키워드로 호출하게 되면
// 자바스크립트 내부 엔진에서는 this에 빈 객체를 할당하고, 마지막에 생성 된 this를 반환해준다.
// 그렇기 때문에 new Person("mike")에서 반환한 this는 person에 담기게 된다.
const person = new Person("mike");
console.log(person.name);

// 1
console.log(Person.prototype);

// 함수의 prototype과 함수가 만들어 질 때 생성되는 prototype속성은 다르다.
console.log(Object.getPrototypeOf(Person) !== Person.prototype); // 샘성자 함수 Person의 prototype은 Person.prototype속성 과는 다르다.

// new 키워드로 생성 된 객체의 prototype은 생성자 함수의 prototype과 같다.
console.log(Object.getPrototypeOf(person) === Person.prototype); // new 키워드로 만들어진 person객체의 prototype속성은 Person.prototype속성과 같다.
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // Person의 prototype속성은 Object의 prototype속성과 같다.
console.log(Object.getPrototypeOf(Person) === Function.prototype); // 생성자 함수 Person은 함수이기때문에 그 prototype은 생성자 함수인 Function의 prototype속성과 같다.

console.log(Object.getPrototypeOf(Object) === Function.prototype); // 생성자 함수 Object는 함수이기때문에 그 prototype은 생성자 함수인 Function의 prototype속성과 같다
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype); // Function의 prototype속성은 객체이기 떄문에 Object.prototype속성과 같다.
console.log(Object.getPrototypeOf(Object.prototype) === null); // Object.prototype속성은 null과 같다.

// 2
// 기본 타입을 리터럴 방법으로 생성해도 기본 생성자 함수의 prototype을 가르킨다.
// string과 number는 사실 객체가 아니지만 객체처럼 동작한다. 
const obj = {};
const arr = [];
const num = 123.456;
const str = "abc";
console.log(Object.getPrototypeOf(obj) === Object.prototype);
console.log(Object.getPrototypeOf(arr) === Array.prototype);
console.log(Object.getPrototypeOf(num) === Number.prototype);
console.log(Object.getPrototypeOf(str) === String.prototype);
console.log(num.toFixed === Number.prototype.toFixed);
console.log(num.toFixed());

// 3
