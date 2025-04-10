import React, { useState } from 'react'
import "./LoginForm.css"

export default function LoginForm() {
  const [datas, setDatas] = useState([]);

  console.log(datas)

  //... 전개구문는 배열안에 있는걸 푸는것 data는 추가하는것
  const addData = (data) => {
    setDatas([...datas, data]);
  }

  return (
    <div>
      <h1>LoginForm</h1>

      <EventForm addData={addData}/>
      <ItemGenerator datas={datas} />
    </div>
  )
}


function EventForm({addData}) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [food, setFood] = useState("짜장면");


  function submitForm(e) {
    e.preventDefault();

    const formData = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      date: date,
      food: food
    }
    console.log(formData)

    addData(formData);
    resetForm();
  }


  function resetForm() {
    setTitle("")
    setDate("")
    setFood("짜장면")
  }

  return (
    // input에 value를 추가하면서 reset버튼을 눌러도 초기화 되지 않는다. 그 이유는 value값을 관리하는게 html이 아닌 react로 넘어가서 초기화 되지 않는다.
    <form className='login-form' onSubmit={submitForm}>
      <label>
        <strong>Event Title: </strong>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </label>
      <label>
        <strong>Event Date: </strong>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        <select onChange={(e) => setFood(e.target.value)}>
          <option value="짜장면">짜장면</option>
          <option value="짬뽕">짬뽕</option>
          <option value="탕수육">탕수육</option>
        </select>
      </label>

      <button type='submit'>제출하기</button>
      <button type='reset' onClick={resetForm}>초기화</button>
    </form>
  )
}


function ItemGenerator({datas}) {
  return (
    <ul>
      {datas.map((data) => {
        return (
          <li key={data.id}>
            <h2>{data.id}. {data.title}</h2>
            <time>{data.date}</time>
            <strong>{data.food}</strong>
          </li>
        )
      })}
    </ul>
  )
}










