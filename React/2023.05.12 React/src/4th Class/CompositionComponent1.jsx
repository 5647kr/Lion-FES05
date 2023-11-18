import React, { useState } from 'react'

export default function CompositionComponent1() {
  return (
    <div>
      <h1>CompositionComponent1</h1>

      <Screen />
    </div>
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