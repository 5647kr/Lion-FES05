import React, { useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function CompositionComponent1() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1 />
    </main>
  )
}

function Example1() {
  const codeString1 = `
  function Button(props) {
    const { text, onClick } = props;
    return (
      <button onClick={onClick}>{text}</button>
    );
  }

  function Modal(props) {
    const { title, content, onClose } = props;
    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <Button text="Close" onClick={onClose} />
      </div>
    );
  }

  function Screen() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal() {
      setIsModalOpen(true);
    }

    function handleCloseModal() {
      setIsModalOpen(false);
    }

    return (
      <div>
        <h1>Welcome to my app!</h1>
        <button onClick={handleOpenModal}>Open modal</button>
        {isModalOpen && (
          <Modal
            title="My modal"
            content="This is my modal."
            onClose={handleCloseModal}
          />
        )}
      </div>
    );
  }
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
              {codeString1}
            </code>
          </pre>
        </CodeWrap>
        <ResultWrap>
          <strong>실행 결과</strong>
          <Screen />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}


function Button(props) {
  const { text, onClick } = props;
  return (
    <button onClick={onClick}>{text}</button>
  );
}

function Modal(props) {
  const { title, content, onClose } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button text="Close" onClick={onClose} />
    </div>
  );
}

function Screen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <h1>Welcome to my app!</h1>
      <button onClick={handleOpenModal}>Open modal</button>
      {isModalOpen && (
        <Modal
          title="My modal"
          content="This is my modal."
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}