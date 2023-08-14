import { useState } from "react";
import EventLoginT from "./EventLoginT";
import EventHompageT from "./EventHompageT";

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }

  const [login, setLogin] = useState(false);

  console.log(login);
  return (
    login ? <EventHompageT /> : <EventLoginT infoUser={user} setLogin={setLogin}/>
  )
}


export default App;