import React, { useState } from 'react'
import './Main.css'

export default function Main(props) {
  const [expert, setExpert] = useState("");
  const [traningtime, setTraningTime] = useState(0);
  const [dday, setDday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setDday(Math.ceil(10000 / traningtime));
  }

  return (
    <main>
    <h2 className="a11y-hidden">필요한 시간 알아보기</h2>
    <form className="cont-input" onSubmit={handleSubmit}>
      <p className="txt-wannabe">나는 
        <input type="text" required value={expert} onChange={(event) => setExpert(event.target.value)}/> 전문가가 될 것이다.
      </p>
      <p className="txt-time">그래서 앞으로 매일 하루에 
        <input type="number" required value={traningtime} onChange={(event) => setTraningTime(event.target.value)}/>
      시간씩 훈련할 것이다.</p>
      <button className="btn-exc" type="submit">나는 며칠동안 훈련을 해야 1만시간이 될까?</button>
    </form>

    {dday && <section className="cont-result">
      <h3 className="a11y-hidden">결과 확인</h3>
      <p className="txt-wannabe">
        당신은 <strong>{expert}</strong> 전문가가 되기 위해서<br />
        대략<strong>{dday}</strong>일 이상 훈련하셔야 합니다.! :&#41;
      </p>
      <button className="btn-go" type="button" onClick={props.modalOpen}>훈련하러 가기 GO! GO!</button>
      <button className="btn-share" type="button">공유하기</button>
    </section>}
  </main>
  )
}
