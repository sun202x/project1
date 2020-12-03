// 자바스크립트에서는 모든 Object에는 prototype이라는 속성이 존재한다.
// Object.getPrototypeOf을 이용하여 prototype을 가져올 수 있다.
// 프로토타입은 null 또는 object이다.
// 모든 자바스크립트엔진에서는 __proto__를 지원한다



// 0 __proto__ vs prototype
// __proto__
// 1. __proto__속성은 모든 "객체"가 가지고 있는 속성
// 2. 객체가 생성될 때 자신의 부모 객체인 prototype을 가르킨다.

// prototype
// 1. "함수" 객체만이 가지는 prototype
// 2. "함수" 객체가 생서자로 사용될 때(생성자함수) 인스턴스의 부모 역할을 하는 객체를 가르킨다.


// 1 프로토타입 생성
const person = {
    name: "mike"
};
const prototype = Object.getPrototypeOf(person);
console.log(typeof prototype);
console.log(person.__proto__ === prototype);



// 2 프로토타입 체이닝 1개
const person = {
    name: "mike"
}
const programmer = {
    language: "javascript"
}
// programmer.__proto__ = person
Object.setPrototypeOf(programmer, person); // 프로토타입 상속
console.log(Object.getPrototypeOf(programmer) === person); // programmer의 프로토타입 == person
console.log(programmer.name);



// 3 프로토타입 체이닝 n개
const person = {
    name: "mike"
}
const programmer = {
    language: "javascript"
}
const frontendDev = {
    framework: "react"
}
Object.setPrototypeOf(programmer, person);
Object.setPrototypeOf(frontendDev, programmer);
console.log(frontendDev.name, frontendDev.language);
console.log(
    frontendDev.__proto__.__proto__.name,
    frontendDev.__proto__.language,
);



// 4 프로토타입 속성 추가
const person = {
    name: "mike"
}
const programmer = {
    language: "javascript"
}
Object.setPrototypeOf(programmer, person);
programmer.name = "jane"; // 새로운 속성을 추가할 땐 프로토타입 체인에 속성을 추가하는 것이 아닌, 자기자신에게 속성을 추가해야한다.
console.log(programmer.name);
console.log(person.name);



// 5 프로토타입 메서드 추가
const person = {
    name: "mike",
    sayHello() {
        console.log("hello");
    }
}
const programmer = {
    language: "javascript"
}
Object.setPrototypeOf(programmer, person);
// programmer에는 sayHello라는 메서드가 존재하지 않지만, person prototype을 상속받았기 때문에 사용할 수 있다.
programmer.sayHello();



// 6 속성 나열
const person = {
    name: "mike",
}
const programmer = {
    language: "javascript"
}

Object.setPrototypeOf(programmer, person);

// 상속받은 속성까지 나열
for (const key in programmer) {
    console.log(key);
}

// 내가 가지고 있는 속성만 나열
// 방법1
// .hasOwnProperty() 사용
for (const key in programmer) {
    if (programmer.hasOwnProperty(key)) {
        console.log(key);
    }
}

// 방법2
// Object.keys() 사용
for (const key of Object.keys(programmer)) {
    console.log(key);
}