// // 아래 배열에서 stock이 0인 상품만 soldOut: true 속성을 추가한 새로운 배열을 만드세요.
// const items = [
//   { name: "Laptop", stock: 3 },
//   { name: "Tablet", stock: 0 },
//   { name: "Phone", stock: 10 },
//   { name: "Monitor", stock: 0 },
// ];

// const newItems = items.map(function (item) {
//   // if (item.stock === 0) {
//   //   return { ...item, soldOut: true };
//   // }

//   // return { ...item, soldOut: false };

//   // return {
//   //   ...item,
//   //   ...(item.stock ===0 && {soldOut: true})
//   // }
// });

// console.log(newItems);

// const numbers = [10, 20];

// // HERE!

// const [a,b] = numbers;
// console.log(a); // 10
// console.log(b); // 20

// 아래 배열에서 첫 번째와 세 번째 값만 변수에 담으세요.
// const numbers = [5, 10, 15, 20];

// const [, a, , b] = numbers;
// console.log(a, b);

// const user = {
//   name: "Tom",
//   age: 30,
// };

// // 위 객체에서 name과 age를 변수로 추출하세요.
// const { name, age: userAge } = user;

// console.log(user);

// const numbers = [1, 2, 3, 4];

// const [first, ...rest] = numbers;

// console.log(first); // 1
// console.log(rest); // [2,3,4]

// const user = {
//   id: 1,
//   name: "김철수",
//   email: "chulsoo@example.com",
//   password: "secret123",
// };

// // password를 제외한 나머지 속성만 userInfo에 담으세요.
// const {password, ...userInfo} = user;

// console.log(userInfo); // { id: 1, name: '김철수', email: 'chulsoo@example.com' }

// const students = [
//   { name: "김철수", score: 45 },
//   { name: "이영희", score: 82 },
//   { name: "박민준", score: 91 },
//   { name: "최수진", score: 60 },
//   { name: "정도현", score: 73 },
// ];

// // 점수가 70점 이상인 학생의 이름만 배열로 담으세요.
// const result = students
//   .filter((student) => student.score >= 70)
//   .map((student) => student.name);

// console.log(result); // ['이영희', '박민준', '정도현']

// const orders = [
//   { id: 1, product: "노트북", price: 1500000, status: "delivered" },
//   { id: 2, product: "마우스", price: 30000, status: "cancelled" },
//   { id: 3, product: "모니터", price: 800000, status: "delivered" },
//   { id: 4, product: "키보드", price: 120000, status: "cancelled" },
//   { id: 5, product: "헤드셋", price: 250000, status: "delivered" },
// ];

// // status가 "delivered"인 주문의 price 합계를 구하세요.
// const total = orders
//   .filter((order) => order.status === "delivered")
//   .reduce((acc, order) => acc + order.price, 0);

// console.log(total);

// Todo CRUD 실습
// 아래 4개의 함수를 완성하세요.

// let todos = [];
// let nextId = 1;

// // 1. 할 일 추가
// function addTodo(title) {
//   // todos 배열에 { id, title, done: false } 형태로 추가하세요.
//   const addTodo = {
//     id: nextId++,
//     title,
//     done: false,
//   };

//   todos = [...todos, addTodo];
// }

// // 2. 할 일 목록 조회
// function getTodos() {
//   // todos 배열을 반환하세요.
//   return todos;
// }

// // 3. 할 일 완료 토글 (done true/false 전환)
// function toggleTodo(id) {
//   // id에 해당하는 todo의 done을 반대로 바꾸세요.
//   const toggledTodo = todos.map(function (t) {
//     if (t.id === id) {
//       return { ...t, done: !t.done };
//     } else return t;
//   });
//   return (todos = toggledTodo);
// }

// // 4. 할 일 삭제
// function deleteTodo(id) {
//   // id에 해당하는 todo를 배열에서 제거하세요.
//   const deletedTodo = todos.filter(function (f) {
//     return f.id !== id;
//   });
//   return (todos = deletedTodo);
// }

// // --- 실행 테스트 ---
// addTodo("JS 공부하기");
// addTodo("운동하기");
// addTodo("책 읽기");
// console.log(getTodos());

// toggleTodo(2);
// console.log(getTodos());

// deleteTodo(1);
// console.log(getTodos());

// 아래 6개의 함수를 완성하세요.

let todos = [];
let nextId = 1;

// 1. 할 일 추가
function addTodo(title) {
  const newTodo = {
    id: nextId++,
    title,
    done: false,
  };
  todos = [...todos, newTodo];
}

// 2. 할 일 목록 조회
function getTodos() {
  return todos;
}

// 3. 할 일 완료 토글
function toggleTodo(id) {
  const toggledTodo = todos.map(function (t) {
    if (id === t.id) {
      return { ...t, done: !t.done };
    } else return t;
  });
  todos = toggledTodo;
}

// 4. 할 일 삭제
function deleteTodo(id) {
  const deletedTodo = todos.filter(function (t) {
    return t.id !== id;
  });
  todos = deletedTodo;
}

// 5. 제목 수정
function updateTodo(id, newTitle) {
  const updatedTodo = todos.map(function (t) {
    if (id === t.id) {
      return { ...t, title: newTitle };
    } else return t;
  });
  todos = updatedTodo;
}

// 6. 완료된 항목만 반환
function getCompletedTodos() {
  return todos.filter(function (t) {
    return t.done;
  });
}

// --- 실행 테스트 ---
addTodo("JS 공부하기");
addTodo("운동하기");
addTodo("책 읽기");

toggleTodo(1);
toggleTodo(3);

console.log(getTodos());
// id 1, 3번 done: true / id 2번 done: false

console.log(getCompletedTodos());
// [{ id: 1, ... }, { id: 3, ... }] 만 나와야 함

updateTodo(2, "수영하기");
deleteTodo(1);

console.log(getTodos());
console.log(getCompletedTodos()); // id 3번만 남아야 함
