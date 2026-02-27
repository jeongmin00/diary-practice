let person = {
  name: "홍길동",
  age: 25,
};
console.log("변경 전 => ", person);
// city
person.city = "서울";
person.job = "개발자";
person.age = 30;
console.log("변경 후 => ", person);

let person2 = {
  name: "홍길동",
  age: 25,
  job: "개발자",
};
console.log("변경 전 => ", person2);
delete person2.job;
console.log("변경 후 => ", person2);
