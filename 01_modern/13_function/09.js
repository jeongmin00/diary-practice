// 값으로서의 함수
// 함수 = 값
const greet = function () {
  console.log("안녕하세요!");
};

const sayHello = greet;
sayHello(); // 안녕하세요!

// 객체의 속성으로
// 함수와 메서드 차이 이해하기!!
const person = {
  name: "홍길동",
  greet: function () {
    console.log("안녕하세요!");
  },
};

const greet2 = function () {
  console.log("안녕하세요2");
};

person.greet(); // 안녕하세요! , 매서드
greet2(); // 함수
