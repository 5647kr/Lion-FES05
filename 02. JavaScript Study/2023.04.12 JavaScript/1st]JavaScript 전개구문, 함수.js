console.log("----------전개구문 1----------");

console.log(Math.max([10, 20, 30])); // 
// 4월 12일 추가
console.log(Math.max(...[10, 20, 30])); 
console.log(Math.min(...[10, 20, 30])); 
console.log(Math.max(...[10, 20, 30, [11, 12, 13, [29, 40, 50]]].flat(Infinity))); 

console.log("----------전개구문 2----------");

// 오류나는코드
console.log(Math.max([10, 20, 30])); 
console.log(Math.max([10, 20, 30, [11, 12, 13, [29, 40, 50]]])); 
console.log(Math.max([10, 20, 30, [11, 12, 13, [29, 40, 50]]].flat(Infinity))); 

console.log("----------전개구문 3----------");

// 자주사용되는 코드
const s = 'hello world';
console.log([s]);  // s.split()
console.log([...s]);  // s.split('')
// {...s} 이렇게 전개할 이유는 없습니다. 잊으셔도 됩니다.

console.log("----------함수 1----------");

function 함수1(a, b) {
  return a +  b;
}
console.log(함수1);
console.log(함수1.length);

console.log("----------함수 2----------");

function 함수2(a, b, c) {
  const z = a + b + c;
  return z
}
console.log(함수2);
console.log(함수2.length);


console.log("----------함수 3----------");

function 함수3(a, b, c, d, e, f) {
  return a
}
console.log(함수3);
console.log(함수3.length);

console.log("----------함수 4----------");

function 함수4(a, b) {
  return a +  b;
}
함수4["location"] = "jeju";
console.log(함수4);

// array, object, function 모두 같은 방식으로 접근하거나 값을 변경할 수 있다.

console.log("----------함수 5----------");

function 함수5(a, b) {
  return a +  b;
}
함수4["name"] = "jejufunction";
// console.log(jejufunction); 호출되지 않는다.

console.log("----------함수 6----------");

function 함수6(a, b) {
  return a +  b;
}
함수6["length"] = 5;
console.log(함수6.length); // 변경되지 않는다.

console.log("----------함수 7----------");
// 아규먼트가 순서대로 들어가는 특성

function 함수7(a = 10, b = 20, c = 30) {
  return a + b + c;
}
console.log(함수7()); 
console.log(함수7(100)); 
console.log(함수7(100, 200)); 
console.log(함수7(100, 200, 300)); 
console.log(함수7(c = 300)); // a에 300이 들어간다는 뜻
console.log(함수7(a = 100, c = 300)); 
console.log(함수7(a = 100, b = 200, c = 300)); 
console.log(함수7(a = 100, c = 300, b=200)); // 뒤바뀌면 지옥문이 열린다. 

console.log("----------함수 8----------");
// roro기법 원리
// 입력되는 아규먼트가 매우 많은 아래 함수의 경우 호출하는 쪽에서 어떤 값이 들어가는지 명확히 알기 어렵고 읽기도 어렵다.
/* 
const 변수1 = 함수8("title", 20, 50, 100, 50, true);
함수8(
  title = "title", 
  xposition = 20, 
  yposition = 50, 
  width = 100, 
  height = 50, 
  drawingnow = true
  );
*/