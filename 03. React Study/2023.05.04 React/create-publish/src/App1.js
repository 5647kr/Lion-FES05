import Menu from './components/menu/Menu';
import NewMenu from './components/NewMenu/NewMenu';

function App() {
  // 컴포넌트의 최상위 부모요소는 1개, 즉 단일해야 한다. 
  return (
  <div>
    <h1>안녕 라이켓!</h1> {/*2개이상 묶어야 할 경우 div로 묶는다 */}
    <h2>안녕 라이켓 2호!</h2>
    <Menu />
    <NewMenu />
    <h3>점심 메뉴 추천!</h3>

    {/* 아래 코드 틀린 부분을 찾아 수정하기
    <textarea
        readonly
        maxlength=3
        style={"background-color: blue;"}
    />
     */}
    <textarea
      readonly
      maxlength='3'
      style={{backgroundColor: "blue"}}
    />

    {/* 강사님 */}
    <textarea
      readOnly
      maxLength={3}
      style={{backgroundColor: "blue"}}
    />
  </div>
  );
}
// 태그에 클래서 넣기, 스타일 적용하기

/**
 * 1. 모든 프로퍼티는 대문자 구분을 따른다.
 * 2. 문제를 제외한 속성값은 중괄호를 사용한다.
 * 3. true 값을 가진 속성은 속성 이름만으로 표현할 수 있다.
      false일 경우  중괄호를 사용한다.
 * 4. class는 className으로 표기한다.
 * 5. 인라인 스타일은 객체 형태로 사용한다.
 * 6. 인라인 스타일로 적용할땐 key와 value를 짝지어 작성한다.
      {"key": value}
  */
export default App;
