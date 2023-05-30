// 문제:
// 배달 음식 주문 시, 주문한 음식들을 최적의 순서로 배치하는 문제입니다. 
// 장미반점은 손님에게 어떤 음식을 가장 빠르게 배달할 수 있는지 알려드릴 수 있는 서비스를 고심중입니다.
// 각 음식은 조리 시간과 목적지에 따른 배달 시간을 가지고 있습니다. 
// 각 음식은 조리 시간과 배달 시간을 합친 총 시간이 가장 짧은 순서에서 가장 긴 순서까지 오름차순으로 배치되어야 합니다. 
// 이를 위해 음식 배치 순서를 결정하는 알고리즘을 구현해보세요.

const arr = [
  {cookingTime: 10, deliveryTime: 15},
  {cookingTime: 7, deliveryTime: 13},
  {cookingTime: 3, deliveryTime: 15},
  {cookingTime: 15, deliveryTime: 5},
  {cookingTime: 11, deliveryTime: 20},
  {cookingTime: 13, deliveryTime: 10}
];


// 버블정렬로 풀어보기

function 버블정렬([...arr]) {
  let isSorted = true;
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - 1 - i; j++) {
      const timeOne = arr[j].cookingTime + arr[j].deliveryTime;
      const timeTwo = arr[j + 1].cookingTime + arr[j + 1].deliveryTime;

      if(timeTwo < timeOne) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSorted = false;
      }
    }
    if(isSorted) break;
  }
  
  return arr;
}
console.log("버블정렬");
console.log(버블정렬(arr));


// 선택정렬로 풀어보기

function 선택정렬([...arr]) {
  for(let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for(let j = i + 1; j < arr.length; j++) {
      const timeOne = arr[j].cookingTime + arr[j].deliveryTime;
      const timeTwo = arr[minIndex].cookingTime + arr[minIndex].deliveryTime;

      if(timeOne < timeTwo) {
        minIndex = j
      }
    }
    if(minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr;
}

console.log("선택정렬");
console.log(선택정렬(arr));

// 삽입정렬로 풀어보기

function 삽입정렬([...arr]) {
  for(let i = 1; i < arr.length; i++) {
    for(let j = i; j > 0 && (arr[j].cookingTime + arr[j].deliveryTime) < (arr[j - 1].cookingTime + arr[j - 1].deliveryTime); j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr
}
console.log("삽입정렬");
console.log(삽입정렬(arr));