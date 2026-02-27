const obj1 = {};

const person = {
  name: "홍길동",
  age: 25,
  isStudent: true,
};

// 홍길동
console.log(person.name); // 점표기법
console.log(person["name"]); // 대괄호표기법

const person2 = {
  name: "홍길순",
  hobbies: ["축구", "영화", "맛집탐방"],
  friend: {
    name: "친구1",
    age: 30,
    hobbies: [],
  },
};
