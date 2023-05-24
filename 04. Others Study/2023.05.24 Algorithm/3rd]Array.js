// https://evanai.notion.site/bcf4da848f904595a50bf5161bc0ed62

console.log("----------push----------");

const arr1 = [1, 2, 3, 4];
arr1.push(5);
console.log(arr1); // 0(1)


console.log("----------pop----------");

const arr2 = [1, 2, 3, 4];
arr2.pop();
console.log(arr2); // 0(1)


console.log("----------unshift----------");

const arr3 = [1, 2, 3, 4];
arr3.unshift(0);
console.log(arr3); // 0(n)
// 인덱스가 바뀌기 때문에 기존 배열에 영향을 미친다.


console.log("----------splice----------");
// 시작, 잘라낼 갯수, 추가

const arr4 = [1, 2, 3, 4];
arr4.splice(2, 1, 6); // 인덱스 2번자리에서 1개를 삭제하고 6을 넣는다
console.log(arr4); // 0(1) ~ 0(n) 
//! 맨 뒤에 추가하면 영향이 없지만, 맨 앞에 추가하면 모두에게 영향을 준다.


console.log("----------makeArray----------");

class UltraArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(item) {
    this.data[this.length] = item;
    this.length += 1;
    return this.length;
  }

  pop() {

  }
}

const myArray = new UltraArray;
myArray.push(1);
console.log(myArray);
myArray.push(2);
console.log(myArray);
myArray.push(3);
console.log(myArray);