console.log("==========Object 1==========");

const human = {
  name: "hojun",
  age: 53,
  from: "korea",
  askingHim: function () {
    console.log("hello world");
  },
  0: "01050442903"
};

human.name = "jun" // value값 변경
console.log(human.name);
console.log(human.askingHim());
delete human.job; // 속성 삭제
console.log("age" in human);

console.log("==========Object in 연산자==========");

// in 연산자 (다른 언어와 동작방식이 달라 주의해야한다.)
//! key를 보기 때문에 20이란 값이 있어도 false가 출력된다.
console.log(20 in [10, 20, 30, 40]);
console.log("length" in [10, 20, 30, 40]);

console.log("==========객체의 매소드==========");

const aespa = {
  members: ['카리나', '윈터', '지젤', '닝닝'],
  from: '광야',
  sing: function(){
    return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
  }
};
//! hasOwnProperty: 객체가 특정 프로퍼티를 가지고 있는지 boolean값으로 반환한다.
console.log(aespa.hasOwnProperty('itzy'));
console.log(aespa.hasOwnProperty('sing'));

console.log("==========key==========");

//! keys 중요
console.log(Object.keys(aespa)); // 불편한 코드이다.
console.log(Object.values(aespa));

//keys는 객체의 속성 이름
//values는 속성값
//을 배열로 반환한다.