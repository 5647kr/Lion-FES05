import React from "react";
import "./StyledComponent1Module.css"
import Question from "./StyledComponent1ModuleQuestion";
// 위 2개 위치 바꿔서 브라우저창 새로고침하면서 변하는거 보기

const App = () => {
  return (
    <>
      <nav className="box">
        <ul>
          <li id="detail" className="text">
            상세정보
          </li>
          <li id="qa" className="text">
            Q&A
          </li>
          <li id="review" className="text">
            Review
          </li>
        </ul>
      </nav>
      <Question />
    </>
  );
};

export default App;