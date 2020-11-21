class Person {
    constructor (name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum () {
        return "class : " + (this.first + this.second);
    }
}

class PersonPlus extends Person {
    constructor (name, first, second, third) {
        // 부모에 정의 된 속성 상속
        super(name, first, second);

        // 자식에서만 사용 될 속성
        this.third = third;
    }

    sum () {
        return super.sum() + this.third;
    }

    avg () {
        return (this.first + this.second + this.third) / 3;
    }
}

var kim = new PersonPlus("kim", 10, 20, 30);

console.log("kim.sum()", kim.sum());
console.log("lee.avg()", kim.avg());