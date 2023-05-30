const arr = ["USA", "Australia", "Canada", "Germany", "Japan", "Brazil"];

function 분할정렬([...arr]) {
  if(arr.length <= 1) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  const leftSection = [];
  const rightSection = [];

  for(let i = 0; i < arr.length; i++) {
    // 기준값보다 작으면 왼쪽으로
    if(arr[i].length < pivot.length) {
      leftSection.push(arr[i]);
    // 기준값보다 크면 오른쪽으로
    } else {
      rightSection.push(arr[i]);
    }
  }
  console.log("leftSection: ", leftSection);
  console.log("rightSection: ", rightSection);

  return 분할정렬(leftSection).concat([pivot], 분할정렬(rightSection));
}

console.log(분할정렬(Arr));