console.log(1 || 3 || 10 || 0); 
console.log(false || '' || 10 || 0); 
// falsy한 값이 있으면 - 첫번째 falsy 값을 반환
// 없으면 - truthy중에 마지막 truthy 값을 반환 
console.log(1 && 2 && 3 && 10); 
console.log(1 && 2 || 3); 