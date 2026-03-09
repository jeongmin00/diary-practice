/* 학점 계산기 */
const score = 85;
if (score >= 90) {
  console.log(`점수: ${score}`);
  console.log(`학점: A`);
} else if (score >= 80) {
  console.log(`점수: ${score}`);
  console.log(`학점: B`);
} else if (score >= 70) {
  console.log(`점수: ${score}`);
  console.log(`학점: C`);
} else if (score >= 60) {
  console.log(`점수: ${score}`);
  console.log(`학점: D`);
} else if (score < 60) {
  console.log(`점수: ${score}`);
  console.log(`학점: F`);
}
