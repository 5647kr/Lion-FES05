let myArr = [10, 9, 8, 5, 6, 1, 3, 4, 2, 1];
let myArr2 = [10, 9, 8, 5, 6];

function bubbleSort(arr) {
  for (let index = 0; index < arr.length - 1; index++) {
    // 원소의 위치를 변경해줍니다.
    if (arr[index] > arr[index + 1]) {
      // let temp = arr[index];
      // arr[index] = arr[index + 1];
      // arr[index + 1] = temp;

      [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
    }
    console.log(arr);
  }
  return arr
}

// let result = bubbleSort(myArr);


function bubbleSortAdvanced(arr) {
  let counter = 0;
  for (let index = 0; index < arr.length - 1; index++) {
    for (let index2 = 0; index2 < arr.length - 1 - index; index2++) {
      // 원소의 위치를 변경해줍니다.
      if (arr[index2] > arr[index2 + 1]) {

        [arr[index2], arr[index2 + 1]] = [arr[index2 + 1], arr[index2]];
      }
      counter++;
      console.log(counter, arr);
    }
  }
  console.log(counter);
  return arr
}

let result2 = bubbleSortAdvanced(myArr2);



function bubbleSortAdvanced2(arr) {
  for (let index = 0; index < arr.length - 1; index++) {
    for (let index2 = 0; index2 < arr.length - 1; index2++) {
      // 원소의 위치를 변경해줍니다.
      if (arr[index2] > arr[index2 + 1]) {

        [arr[index2], arr[index2 + 1]] = [arr[index2 + 1], arr[index2]];
      }
      console.log(arr);
    }
  }
  return arr
}