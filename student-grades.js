/* 레벨 1: 배열 사용 */
// 학생 이름 배열
const names = ["홍길동", "김철수", "이영희"];

// 점수 배열
const scores = [85, 90, 78];

// TODO: 각 학생의 이름과 점수 출력
for (let i = 0; i < 3; i++) {
  console.log(`${names[i]}: ${scores[i]}`);
}
// 홍길동: 85점
// 김철수: 90점
// 이영희: 78점

// TODO: 평균 점수 계산
let ave,
  sum = 0;

for (let i = 0; i < scores.length; i++) {
  sum = sum + scores[i];
}

ave = sum / scores.length;
console.log(`평균 점수: ${ave}`);

/* 레벨 2: 객체 사용 */
// 학생 객체
const student = {
  name: "홍길동",
  korean: 90,
  english: 85,
  math: 88,
};

// TODO: 총점 계산
const total = student.korean + student.english + student.math;

// TODO: 평균 계산
const average = total / 3;

// TODO: 결과 출력
console.log(`총점: ${total}`);
console.log(`평균: ${average}`);

/* 레벨 3: 객체 배열 */
// 여러 학생 관리
const students = [
  { name: "홍길동", korean: 90, english: 85, math: 88 },
  { name: "김철수", korean: 78, english: 92, math: 81 },
  { name: "이영희", korean: 95, english: 89, math: 93 },
];

// TODO: 각 학생의 평균 계산
console.log("=== 학생별 성적 ===");

for (let i = 0; i < students.length; i++) {
  const stu_ave = 
    (students[i].korean + students[i].english + students[i].math) /
    3;
  
  console.log(`${students[i].name}: 평균 ${stu_ave.toFixed(2)}점`);
}

// TODO: 전체 학생 평균 계산
console.log("");
console.log("=== 전체 통계 ===");

let All_total = 0;
for (let i = 0; i < students.length; i++) {
  All_total =
    All_total + (students[i].korean + students[i].english + students[i].math);
}
const total_ave = (All_total / students.length * 3)

console.log(`전체 평균: ${total_ave.toFixed(2)}점`);

// TODO: 최고 점수 학생 찾기
let high_score = 0;
let high_student = "";

for (let i = 0; i < students.length; i++) {
  const students_ave = (
    (students[i].korean + students[i].english + students[i].math) /
    3
  );
  if (high_score < students_ave) {
    high_score = students_ave;
    high_student = students[i].name;
  }
}

console.log(`최고 점수: ${high_student} (${high_score.toFixed(2)}점)`);
