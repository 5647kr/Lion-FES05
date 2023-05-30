let Arr = [10, 9, 8, 5, 6, 1, 3, 4, 2, 1];

function 선택정렬([...arr]) {
  for(let i = 0; i < arr.length; i++) {
    // 가장 작은 원소의 인덱스 번호를 0으로 초기화한다.
    let minIndex = i;
    for(let j = i + 1; j < arr.length; j++) {
      // 버블정렬과의 차이1
      // 버블정렬은 원소와 바로 다음 원소를 비교한다.
      // 선택정렬은 가장 작은 인덱스의 원소와 나머지 원소를 비교한다.

      // 버블정렬과의 차이2
      // 버블정렬은 원소와 원소를 비교하고 위치를 교환한다.
      // 선택정렬은 가장 작은 인덱스를 저장한다.
      
      if(arr[minIndex] > arr[j]) {
        console.log(minIndex);
        minIndex = j;
      }
    }
    // 가장 작은 원소의 인덱스가 바뀐다면
    if(i !== minIndex) {
      // 선택정렬은 중간에 불필요한 원소의 위치 교환 없이 두번째 for문의 가장 마지막에 딱 한번 뭐시기 한다.
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}
console.log(선택정렬(Arr));