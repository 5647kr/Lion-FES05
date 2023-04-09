console.log("----------객체 1----------");

const human = {
  name: "hojun",
  age: 53,
  from: "korea",
  askingHim: function () {
    console.log("hello world");
  },
  0: "01050442903"
};
human.name = "jun"
console.log(human.name);
console.log(human.askingHim());
delete human.job;
console.log("age" in human);

console.log("----------in 연산자----------");

// in 연산자 (다른 언어와 동작방식이 달라 주의해야한다.)
console.log(20 in [10, 20, 30, 40]);
console.log("length" in [10, 20, 30, 40]);

console.log("----------객체의 메소드----------");

// 객체의 메소드

const aespa = {
  members: ['카리나', '윈터', '지젤', '닝닝'],
  from: '광야',
  sing: function(){
    return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
  }
};
// hasOwnProperty v**
console.log(aespa.hasOwnProperty('itzy'));
console.log(aespa.hasOwnProperty('sing'));

console.log("----------key----------");

// keys v***
console.log(Object.keys(aespa)); // 불편한 코드이다.
console.log(Object.values(aespa));