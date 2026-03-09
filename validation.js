/* 레벨 1: 기본 유효성 검사 */
// 회원가입 폼 데이터
const signupData = {
  username: "",
  email: "user@example.com",
  password: "1234",
  age: 0,
};

let isValid = true;

const username = signupData.username ?? "";
const email = signupData.email ?? "";
const password = signupData.password ?? "";
const age = signupData.age ?? null;

console.log("=== 회원가입 검증 ===");

// TODO: username 체크 (빈 문자열 체크)
if (!username.trim()) {
  console.log("❌ username이 비어있습니다.");
  isValid = false;
}

// TODO: email 체크 (@가 포함되어 있는지)
if (!email.includes("@")) {
  console.log("❌ 올바른 이메일 형식이 아닙니다.");
  isValid = false;
}

// TODO: password 체크 (6자 이상)
if (!password || password.length < 6) {
  console.log("❌ password는 6자 이상이어야 합니다.");
  isValid = false;
}

// TODO: age 체크 (0도 유효한 값!)
if (age === null || age < 0) {
  console.log("❌ 나이를 올바르게 입력해주세요.");
  isValid = false;
}

// 모든 검사 통과하면 "가입 성공"
if (isValid) {
  console.log("가입 성공");
}

console.log("");
// 하나라도 실패하면 어떤 항목이 문제인지 출력

/* 레벨 2: 기본값 설정 */
// 사용자 설정 (일부만 입력됨)
const userSettings = {
  theme: "dark",
  notifications: false, // false도 유효한 설정!
  language: null,
};

// TODO: 기본 설정 객체 생성
userSettings.fontSize = null;

// theme: 없으면 'light'
userSettings.theme = userSettings.theme ?? "light";

// notifications: 없으면 true (false도 유효!)
userSettings.notifications = userSettings.notifications ?? true;

// language: 없으면 'ko'
userSettings.language = userSettings.language ?? "ko";

// fontSize: 없으면 14
userSettings.fontSize = userSettings.fontSize ?? 14;

console.log("=== 사용자 설정 ===");
console.log(userSettings);
console.log("");

/* 레벨 3: 복합 조건 검사 */
// 운전 가능 여부 판단
function canDrive(age, hasLicense, hasVision) {
  // TODO: 조건
  // 1. 18세 이상
  // 2. 면허 있음
  // 3. 시력 검사 통과
  // 모두 만족해야 운전 가능
  // AND 연산자 활용
  return age >= 18 && hasLicense && hasVision;
}

console.log(canDrive(20, true, true)); // true
console.log(canDrive(17, true, true)); // false
console.log(canDrive(20, false, true)); // false

// 할인 적용 여부
function getDiscount(age, isMember, isHoliday) {
  // TODO: 조건 (하나라도 만족하면 할인)
  // 1. 65세 이상
  // 2. 멤버십 회원
  // 3. 공휴일
  // OR 연산자 활용
  return age >= 65 || isMember || isHoliday;
}

console.log(getDiscount(70, false, false)); // true
console.log(getDiscount(30, true, false)); // true
console.log(getDiscount(30, false, false)); // false

/* 예상 출력 */
// === 회원가입 검증 ===
// ❌ username이 비어있습니다.
// ❌ password는 6자 이상이어야 합니다.

// === 사용자 설정 ===
// {
//   theme: 'dark',
//   notifications: false,
//   language: 'ko',
//   fontSize: 14
// }

// === 운전 가능 ===
// canDrive(20, true, true): true
// canDrive(17, true, true): false

// === 할인 적용 ===
// getDiscount(70, false, false): true
// getDiscount(30, false, false): false
