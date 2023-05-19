import EventLogin from "./EventLogin";

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: 1234
  }
  return (
    <EventLogin user={user}/>
  )
}


export default App;