import React from "react";
import Question from "./StyledComponent3ModuleQuestion";
import "./StyledComponent3ModuleQuestion.css"

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