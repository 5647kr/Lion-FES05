console.log("----------This----------");

// 인스턴스를 가리키는 자기 참조 변수이다.
/* 
호출하는 것이 object이면 해당 객체를 가리킨다.
기본적으로 전역객체(js-window, node-global)

1. 전역 공간의 this는 window
2. 메소드로 호출한 경우 this는 맴버접근연산자 앞에 객체
3. 함수로 호출하는 경우 this는 window
4. 화살표 함수의 경우 this는 상위스코프
5. 생성자함수의 경우 this는 인스턴스
6. 콜백함수의 경우 this가 다르게 동작 할 수 있음
*/

function attackBeam() { // 레이저 공격
  this.hp -= 20
}

function attackKnife() { // 칼공격
  if (this.name === 'thanos'){
    this.hp -= 1
    return
  }
  this.hp -= 5
}

let jombie = {
  name: 'jombie',
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 10000,
  power: 2
}

let thanos = {
  name: 'thanos',
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 1000,
  power: 100
}

jombie.damaged1();  // Beam
jombie.damaged2();  // Knife
console.log(jombie.hp); 