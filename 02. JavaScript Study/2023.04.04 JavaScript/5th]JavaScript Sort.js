// 메소드는 배열의 요소를 정렬하는데 숫자를 정렬할땐 제대로 되지 않는다.
const avengers = ["아이언맨", "스파이더맨", "헐크", "토르"];
console.log(avengers.sort());

console.log("-------------------------");

const num1 = [3, 1, 8, 6];
console.log(num1.sort());

console.log("-------------------------");

const num2 = [3, 1, 11, 8, 6];
console.log(num2.sort());

console.log("-------------------------");

const num3 = [3, 1, 11, 8, 6];
console.log(num3.sort((a, b) => a - b)); // 오름차순

console.log("-------------------------");

const num4 = [3, 1, 11, 8, 6];
console.log(num4.sort((a, b) => b - a)); // 내림차순

console.log("-------------------------");

// deep하게 sort를 공부하겠다

const num5 = [3, 1, 11, 8, 6];
console.log(num5.sort((a, b) => {
  console.log(a, b);
  console.log(a - b);
  }));

  // https://www.notion.so/paullabworkspace/JavaScript-sort-compare-function-ff38f176e79e4c5d9ade9c4734620ffd

  console.log("-------------------------");

  // 실무사용코드
function sort(key){
  if (click){
    click = false
    var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
  }
  else{
    click = true
    var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
  }
}