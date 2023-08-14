import { useState } from "react";
import EventLoginT from "./EventLoginT";
import EventHompageT from "./EventHompageT";
import ModalT from "./EventModalT";

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }

  const [login, setLogin] = useState(false);
  const [modalShow, setModalShow] = useState(true);

  function modalClose() {
    setModalShow(false);
  }

  console.log(login);
  return (
    <>
      {login ? <EventHompageT /> : <EventLoginT infoUser={user} setLogin={setLogin}/>} 
      {modalShow && <ModalT modalClose={modalClose}>
        <h2>사용약관에 대해 말씀드리겠습니다.</h2>
        <p>해킹에 책임지지 않습니다.</p>
      </ModalT>}
    </>
  )
}


export default App;