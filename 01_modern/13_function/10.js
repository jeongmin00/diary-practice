// callback 함수
// 함수의 인자로 사용이 되는 함수

const a = function (func1) {
  console.log("함수 시작합니다..!!!");
  func1();
};

const b = function () {console.log("b가 호출됨!")};
a(b);

// setTimeout
// setTimeout(함수, 밀리초);

// setTimeout
setTimeout(function () {
  console.log("3초 후 실행");
}, 3000);

// forEach(배열, 함수)
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
      callback(array[i], i);
  }
}

forEach([1, 2, 3], function (item, index) {
  console.log(`${index}: ${item}`);
});

// 0: 1
// 1: 2
// 2: 3