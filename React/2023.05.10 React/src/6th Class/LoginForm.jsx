import React, { useState } from 'react'
import './LoginForm.css'

export default function LoginForm() {
  const [datas, setDatas] = useState([]);

  const addData = (data) => {
    setDatas([...datas, data])//... 전개구문는 배열안에 있는걸 푸는것 
    //data는 추가하는것
  }

  return (
    <>
      <ItemCreator datas={datas}/>
      <EventForm addData={addData}/>
    </>
  )
}

function EventForm({addData}) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  //초기화 기능
  function resetForm() {
    setTitle('')
    setDate('')
  }

  //제출 기능
  function submitForm(event) {
    event.preventDefault();

    const formdata = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      date: date
    }
    console.log(formdata)

    addData(formdata);
    resetForm();
  }

  return (
    <>
    <form className='login-form' onSubmit={submitForm}>
      <label>
        <strong>Login Title: </strong>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
      </label>
      <label>
        <strong>Login Date: </strong>
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)}/>
      </label>

      <button type='submit'>제출</button>
      <button type='reset' onClick={resetForm}>초기화</button>
    </form>
    </>
  )
}

function ItemCreator({datas}) {
  console.log(datas)
  return (
      <div>
        {datas.map((data) => {
          return (
            <div key={data.id}>
              <h2>{data.title}</h2>
              <time>{data.date}</time>
            </div>
          )
        })}
      </div>
    )
}
