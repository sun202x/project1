var kim = { name: "kim", first: 10, second: 20 }
var lee = { name: "lee", first: 10, second: 10 }

function sum (prefix) {
    return prefix + (this.first + this.second);
}

sum.call(kim, "kim"); // this를 kim으로 바인딩 / 실행 context를 변경
sum.call(lee, "lee"); // this를 lee으로 바인딩 / 실행 context를 변경

var kimSum = sum.bind(kim, "kimSum"); // bind는 실행 context가 변경 된 함수를 반환한다