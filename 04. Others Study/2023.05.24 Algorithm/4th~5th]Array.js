// https://evanai.notion.site/bcf4da848f904595a50bf5161bc0ed62

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
    const lastState = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    return lastState;
  }

  // index 숫자로 속성을 제거한다.
  deleteWithIndex(index) {
    const removedItem = this.data[index];
    delete this.data[index];
    this.changeOrderOfItems(index)
    return removedItem;
  }

  // 인덱스를 정리하고 속성을 제거한다.
  changeOrderOfItems(index) {
    // 받아오는 인덱스부터 시작해 정리한다.
    for(let i = index; i < this.length; i++) {
      // 뒤에 있는 인덱스를 앞으로 당겨야한다.
      this.data[i] = this.data[i + 1];
    }
    // 대상을 제거한다.
    delete this.data[index];
    // 길이를 하나 줄인다.
    this.length -= 1;
  }
}

const myArray = new UltraArray;
myArray.push(1);
console.log(myArray);
myArray.push(2);
console.log(myArray);
myArray.push(3);
console.log(myArray);