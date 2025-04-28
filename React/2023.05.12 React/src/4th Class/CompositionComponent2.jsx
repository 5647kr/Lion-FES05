import React from 'react'
import styled from "styled-components";
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function CompositionComponent2() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1 />
      <Example2 />
      <Example3 />
    </main>
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

function Example1() {
  const codeString = `
  const CardDiv = styled.div\`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: 200px;
\`;

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
  `
  
  return (
    <Wrap>
      <Title>합성 컴포넌트</Title>
        <p>일반적인 컴포넌트를 하나 만들고 그 안에 세부 기능을 가지는 컴포넌트를 합성해서 사용할 수 있다. 컴포넌트를 합성함으로써 컴포넌트의 재사용성을 높일 수 있다.

        </p>
      <ContentWrap>
        <CodeWrap>
          <strong>코드</strong>
          <pre>
            <code>
              {codeString}
            </code>
          </pre>
        </CodeWrap>
        <ResultWrap>
          <strong>실행 결과</strong>
          <CardOne/>
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}


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

function Example2() {
  const codeString = `
    const CardDivTwo = styled.div\`
      padding: 20px;
      border-radius: 10px;
      border: 1px solid #c4c4c4;
      margin-bottom: 20px;
      width: 400px;
    \`;

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
  `
  
  return (
    <Wrap>
      <Title>합성 컴포넌트</Title>
        <p>일반적인 컴포넌트를 하나 만들고 그 안에 세부 기능을 가지는 컴포넌트를 합성해서 사용할 수 있다. 컴포넌트를 합성함으로써 컴포넌트의 재사용성을 높일 수 있다.

        </p>
      <ContentWrap>
        <CodeWrap>
          <strong>코드</strong>
          <pre>
            <code>
              {codeString}
            </code>
          </pre>
        </CodeWrap>
        <ResultWrap>
          <strong>실행 결과</strong>
          <CardTwo/>
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}



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
    <CardDiv1 className={props.className}>
      <h3>{props.value}</h3>
      <hr />
      <div>{props.children}</div>
    </CardDiv1>
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

function Example3() {
  const codeString = `
const CardDiv1 = styled.div\`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: \${(props) => (props.className === "setting" ? "200px" : "400px")};
\`;

const Card = (props) => {
  console.log(props)
  return (
    <CardDiv1 className={props.className}>
      <h3>{props.value}</h3>
      <hr />
      <div>{props.children}</div>
    </CardDiv1>
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
  `
  
  return (
    <Wrap>
      <Title>합성 컴포넌트</Title>
        <p>일반적인 컴포넌트를 하나 만들고 그 안에 세부 기능을 가지는 컴포넌트를 합성해서 사용할 수 있다. 컴포넌트를 합성함으로써 컴포넌트의 재사용성을 높일 수 있다.

        </p>
      <ContentWrap>
        <CodeWrap>
          <strong>코드</strong>
          <pre>
            <code>
              {codeString}
            </code>
          </pre>
        </CodeWrap>
        <ResultWrap>
          <strong>실행 결과</strong>
          <CardThree/>
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}










