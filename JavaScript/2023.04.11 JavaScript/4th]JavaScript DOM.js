const hello1 = document.querySelector('.hello1');
hello1.insertAdjacentHTML('beforebegin', '<span>안녕하세요 저는</span>');
hello1.insertAdjacentHTML('afterbegin', '<span>재현입니다</span>');
hello1.insertAdjacentHTML('beforeend', '<span>면접오시면</span>');
hello1.insertAdjacentHTML('afterend', '<span>치킨사드릴게요</span>');


console.log("----------DOM안에서 노드 탐색하기----------");

const cont = document.querySelector(".cont");
console.log(cont.firstElementChild);  // 첫번째 자식을 찾습니다.
console.log(cont.lastElementChild);   // 마지막 자식을 찾습니다.
console.log(cont.nextElementSibling); // 다음 형제요소를 찾습니다.
console.log(cont.previousSibling);    // 이전 형제노드를 찾습니다.
console.log(cont.children);           // 모든 직계자식을 찾습니다.
console.log(cont.parentElement);      // 부모 요소를 찾습니다.
// 자기 자신부터 시작해 부모로 타고 올라가며 가장 가까운 cont 클래스 요소를 찾습니다. 단, 형제요소는 찾지 않습니다.
console.log(cont.querySelector('strong').closest('.cont').innerHTML);  
console.log(cont.querySelector('strong').closest('strong').innerHTML);
// 자기 자신도 대상이 된다.

console.log("----------이벤트 객체----------");

// 이벤트에서 호출되는 핸들러(콜백함수)에는 이벤트와 관련된 뫼든 정보를 가지고 있는 매개변수가 전송된다. 이를 이번트 객체를 말한다.

const btnFirst = document.querySelector('.btn-first');
btnFirst.addEventListener('click', (event) => {
  console.log(event);
});

