console.log("----------재귀 함수 1(*)----------");
// 문자열 뒤집기
function reverse1(text1) {
  if(text1.length <= 1) {
    return text1
  }
  return reverse1(text1.slice(1)) + text1[0];
}
console.log(reverse1("hello"));
/* 
호출                   return                    최종값
reverse("hello")      reverse("ello") + "h"   "olle" + "h" == "olleh"
reverse("ello")       reverse("llo") + "e"    "oll" + "e" == "olle"
reverse("llo")        reverse("lo") + "l"     "ol" + "l" == "oll"
reverse("lo")         reverse("o") + "l"      "o" + "l" == "ol"
reverse("o")          "o" 
*/ 

console.log("----------스코프 1----------");
// 블록레벨 스코프(let, const)

{
  var a = 1
  let b = 10;
  const c = 20;
}
// console.log(a); 사용하지 않는다.
// console.log(b); 호출되지 않는다.
// console.log(c); 호출되지 않는다.

console.log("----------스코프 2----------");
// 지역, 전역 변수
let c = 100; // 블록 밖에 선언하면 전역에서 접근할 수 있다. 이를 전역 변수라 한다.
function 함수1() {
  let d = 20;
  console.log(c);
  /*  
  c가 함수 안에 없어 위로 올라가서 찾는데 이를 스코프체인이라 한다.
  전역까지 올라가도 변수가 없다면 에러가 난다.
  */
}
// console.log(d); 블록 안에 선언하면 밖에서 접근할 수 없다. 이를 지역변수라 한다.

console.log("----------스코프 3----------");
/* 
let e = 10;
function 함수1() {
  let e = 20;
  function 함수2() {
    function 함수3() {
      let e = 30;
      console.log(e);
    }
  }
}

let a = 10
let b = 10
function 함수1() {
  let a = 20
  let b = 20
  function 함수2() {
    let a = 30
    console.log(a, b)
  }
  함수2()
}
함수1()
*/
console.log("----------스코프 4----------");
// 함수의 호이스팅(함수나 변수를 끌어올려주는 것)
함수2(10)
function 함수2(e) {
  return e + 100;
}
console.log(함수2(10));




/**
 *
 * 그것이 알고싶다. 클로저
 *
 */

var outer = function () {
  var a = 1;
  var inner = function () {
      var b = 5;
      var c = 6;
      a = a + b + c;
      console.log(a);
  };
  inner();
};
outer();

//------------------------------------//

var outer = function () {
  var a = 1;
  var inner = function () {
      var b = 5;
      var c = 6;
      a = a + b + c;
      console.log(a);
  };
  return inner;
};

var newInner = outer();
newInner();

//------------------------------------//

var person = (function () {
  var age = 15;

  return {
      name: "wade",

      getAge: function () {
          console.log(age);
          return age;
      },

      setAge: function (val) {
          age = val;
          console.log(age);
      }
  }
})();

person.getAge();
person.setAge(20);

person.age = 30;
person.getAge();

console.log("----------스코프 5(정리 필요)----------");
/* 
함수3(10)
function 함수3(f) {
  return f + 100;
}

console.log(함수2(10));

function 함수(x) {
  return x + 100
}

// error가 생깁니다.
함수(10)

let 함수 = x => x + 100

// error가 생깁니다.
함수(10)

const 함수 = function (x) {
  return x + 100
}

------------------------------------------

// let과 const는 블록레벨 스코프를 가지고 있습니다.
// 변수에 접근할 수 있는 유효범위
{
    let x = 10
    const y = 20
}

console.log(x, y)

// 지역변수와 전역변수
let x = 100 // 블록 밖에 선언하시면 전역에서 접근할 수 있는 변수가 됩니다. 이를 전역 변수라고 합니다.
function 함수() {
    let y = 20 // 블록 안에 변수를 선언하시면 밖에서 접근할 수 없습니다. 이를 지역변수라고 합니다.
    console.log(x) // 스코프 체이닝(스코프 체인을 따라 해당 영역에 변수가 없으면 계속해서 상위 스코프를 따라 올라갑니다. 전역까지 올라갔는데도 변수가 없다면 애러가 납니다.)
}
함수()

// 1
let x = 10
function 함수1() {
    let x = 20
    function 함수2() {
        function 함수3() {
            console.log(x)
        }
    }
}

함수1()

// 2
let x = 10
function 함수1() {
    let x = 20
    function 함수2() {
        function 함수3() {
            let x = 30
            console.log(x)
        }
        함수3()
    }
    함수2()
}

함수1()

// 3
let x = 10
function 함수1() {
    let x = 20
    function 함수2() {
        function 함수3() {
            console.log(x) // 20
        }
        함수3()
    }
    함수2()
}

함수1()
console.log(x) // 10


// 함수의 호이스팅
// (함수나 변수를 끌어올려 주는 것 처럼 보임)
// 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미
// error 없이 실행 됩니다.
함수(10)

function 함수(x) {
    return x + 100
}

// error가 생깁니다.
함수(10)

let 함수 = x => x + 100

// error가 생깁니다.
함수(10)

const 함수 = function (x) {
    return x + 100
}
*/