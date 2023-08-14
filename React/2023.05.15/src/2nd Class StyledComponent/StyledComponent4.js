import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  color: ${(props) => (props.name === 'hello'? 'red' : 'blue')};
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;


const App = () => {
  return (
    <ContentDiv>
      <ContentH2 name="hello">Q&A</ContentH2>
      {/* name을 hello말고 다른걸로 바꾸며 9번줄과 확인한다. */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
    </ContentDiv>
  );
};

export default App;