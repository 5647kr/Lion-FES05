import React from 'react'
import styled from "styled-components";

export default function CompositionComponent2() {
  return (
    <div>
      <h1>CompositionComponent2</h1>

      <CardOne/>
      <CardTwo/>
      <CardThree />
    </div>
  )
}

const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: 200px;
`;

const CardOne = (props) => {
  return (
    <>
      <CardDiv>
        <h3>챌린지 설정</h3>
        <hr />
        <button>초기화</button>
        <button>저장하기</button>
      </CardDiv>
    </>
  );
};

const CardDivTwo = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: 400px;
`;

const CardTwo = (props) => {
  return (
    <>
      <CardDivTwo>
        <h3>서비스 공유하기</h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
          eveniet, laudantium, deleniti autem sequi molestias magni quia,
          aliquam et praesentium nostrum dolores culpa cupiditate unde
          doloremque labore beatae accusamus.
        </p>
        <div>
          <button>이미지 저장</button>
          <button>트위터</button>
          <button>페이스북</button>
        </div>
      </CardDivTwo>
    </>
  );
};

const CardDiv1 = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;


const Card = (props) => {
  console.log(props)
  return (
    <CardDiv className={props.className}>
      <h3>{props.value}</h3>
      <hr />
      <div>{props.children}</div>
    </CardDiv>
  );
};

function CardThree() {
  return (
    <>
      <Card className="setting" value="챌린지 설정">
        <SettingCard />
      </Card>
      <Card className="share" value="서비스 공유하기">
        <ShareCard />
      </Card>
    </>
  );
}

const SettingCard = () => {
  return (
    <>
      <button>초기화</button>
      <button>저장하기</button>
    </>
  );
};


const ShareCard = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
        eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam
        et praesentium nostrum dolores culpa cupiditate unde doloremque labore
        beatae accusamus.
      </p>
      <div>
        <button>이미지 저장</button>
        <button>트위터</button>
        <button>페이스북</button>
      </div>
    </>
  );
};

