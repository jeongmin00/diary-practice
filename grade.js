/* 학점 계산기 */
const score = 95;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else if (score < 60) {
  console.log("F");
}

switch (score) {
    case 100:
      console.log(`점수: ${score}`);
      console.log(`학점: A`);
      break;
    case 95:
      console.log(`점수: ${score}`);
      console.log(`학점: A`);
      break;
    case 90:
      console.log(`점수: ${score}`);
      console.log(`학점: A`);
      break;
    case 85:
      console.log(`점수: ${score}`);
      console.log(`학점: B`);
      break;
    case 80:
      console.log(`점수: ${score}`);
      console.log(`학점: B`);
      break;
    case 75:
      console.log(`점수: ${score}`);
      console.log(`학점: C`);
      break;
    case 70:
      console.log(`점수: ${score}`);
      console.log(`학점: C`);
      break;
    case 65:
      console.log(`점수: ${score}`);
      console.log(`학점: D`);
      break;
    case 60:
      console.log(`점수: ${score}`);
      console.log(`학점: D`);
      break;
    default:
      console.log(`점수: ${score}`);
      console.log(`학점: F`);
      break;
  }