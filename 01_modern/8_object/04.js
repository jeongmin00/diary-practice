let person = {
  name: "홍길동",
  age: 25,
  greet: function () {
    console.log("안녕하세요!");
  },
  introduce: function () {
    console.log("저는 " + this.name + "입니다.");
  },
};

person.introduce();
