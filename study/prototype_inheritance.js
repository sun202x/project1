var superObj = { superVal: "super" }
// 사용하지 않음
// var subObj = { subVal: "sub" }
// subObj.__proto__ = superObj;

var subObj = Object.create(superObj); // superObj 상속
subObj.subVal = "sub";
subObj.superVal = "sub";

var kim = {
    name: "kim",
    first: 10,
    second: 20,
    sum: function () {
        return this.first + this.second;
    }
}

var lee = Object.create(kim); // kim 상속
lee.name = "lee";
lee.first = 10;
lee.second = 10;
lee.avg = function () {
    return (this.first + this.second) / 2;
}

// var lee = {
//     name: "lee",
//     first: 10,
//     second: 10,
//     avg: function () {
//         return (this.first + this.second) / 2;
//     }
// }

lee.sum();
lee.avg();