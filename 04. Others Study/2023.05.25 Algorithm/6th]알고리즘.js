// 배열이 하나 주어졌을 때[3, 2, 4, 5, 2, 1, 0, 3]
// 함수의 목적은 가장 먼저 반복되는 원소의 값을 반환한다.

let arr = [3, 2, 4, 5, 2, 1, 0, 3];

function test1(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      arr[i] === arr[j];
    }
  }
  return undefined;
}
// 이중for문을 이용해서 작업속도가 느리고 정답도 아니다

function test2() {
  const useHash = {};
  for(let i = 0; i < arr.length; i++) {
    if(useHash[arr[i]]) {
      return arr[i];
    } else {
      useHash[arr[i]] = i;
    }
  }
}