import { useState } from "react";
import EventForm from "./components/EventForm";
import itemGenerator from "./components/itemGenerator";

function App() {

  const [datas, setDatas] = useState({});

  const addData = (data) => {
    setDatas([...datas, data]);
  }

  return (
    <div>
      <itemGenerator datas={datas} />
      <EventForm addData={addData} />
    </div>
  );
}
export default App;
