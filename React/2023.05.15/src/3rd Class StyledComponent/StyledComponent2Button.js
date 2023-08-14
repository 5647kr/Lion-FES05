import React from "react";
import styled from "styled-components";

const BtnOne = styled.button`
  background-color: blue;
  width: 100px;
  height: 80px;
  color: #fff;
  font-weight: bold;
  border: 3px solid black;
  margin-top: 10px;
`

const BtnTwo = styled(BtnOne)`
  background-color: skyblue;
  border-radius: 10px;
  border: none;
  color: #000;
`

const BtnThree = styled(BtnOne)`
  background-color: yellowgreen;
  border: none;
  border-radius: 20px;
`

const App = () => {
	return (
    <>
      <BtnOne>버튼1</BtnOne>
      <br />
      <BtnTwo>버튼2</BtnTwo>
      <br />
      <BtnThree>버튼3</BtnThree>
    </>
	);
};

export default App;