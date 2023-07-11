// 문제1

// 통장에 10000원 초과있으면 부자
// 10000원 이하있으면 부를 바라는 자

const account1 = 11000; // 여기 숫자를 변경하며 확인
const price1 = account1 > 10000 ? "부자" : "부를 바라는 자";
console.log(price1);


// 문제2

// 100000원 초과 있으면 초부자
// 10000원 초과 있으면 부를 바라는 자
// 10000원 이하있으면 부를 바라는 자

const account2 = 15000; // 여기 숫자를 변경하며 확인
const price2 = account2 > 100000 ? "초부자" : (account2 > 10000) ? "부자" : "부를 바라는 자";
console.log(price2);