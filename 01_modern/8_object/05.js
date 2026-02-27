let person = {
  name: "홍길동",
  age: 25,
  city: "서울",
};

// 지금 그렇게 중요하진 않아요!!
// for ~ in
for (let key in person) {
  //   console.log(key);
  console.log(person[key]);
}

// for (let value of person) {
//   console.log(value);
// }
