import React, { Fragment, useState } from 'react';
import './MoodStyle.css'

export default function Mood() {
  const list = [
    "기분이 정말 좋아요!",
    "기분이 좋아요!",
    "기분이 평범해요",
    "기분이 최악이에요",
  ];

  const [selectBtn, setSelectBtn] = useState("기분이 정말 좋아요!");

  function selectMood(item) {
    setSelectBtn(item);
  }

  return (
    <div>
      <h1>Mood</h1>
      <MoodBtn list={list} selectMood={selectMood} />
      <MoodBox selectBtn={selectBtn}/>
    </div>
  );
}

export function MoodBtn({ list, selectMood }) {


  return (
    <div className='Btn-Box'>
      {list.map((item, index) => (
        <Fragment key={index}>
          <button className='MoodBtn' onClick={() => selectMood(item)}>{item}</button>
        </Fragment>
      ))}
    </div>
  );
}

export function MoodBox({selectBtn}) {
  return (
    <div className="MoodBox">
      <h2>{selectBtn}</h2>
    </div>
  )
}