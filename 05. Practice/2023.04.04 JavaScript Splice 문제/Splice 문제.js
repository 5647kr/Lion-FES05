// 연습문제'
// 만들고 싶은 값: [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]
const arr9 = [10, 20, 30, 40, 50];
const x = [1, 2, 3];

arr9.splice(1, 0, ...x);
arr9.splice(7, 0, ...x);
console.log(arr9);