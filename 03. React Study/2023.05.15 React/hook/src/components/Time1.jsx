import React, { useState, useEffect } from 'react';

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log("렌더링이 됩니다..?")
  //렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.
  // setInterval(() => {
  //   setToday(new Date())
  //   setHour(today.getHours())
  //   setMin(today.getMinutes())
  //   setSec(today.getSeconds())
  // }, 1000); 이렇게 하면 안된다.

  // 방법1 settimeout을 사용하나 interval 처럼 쌓이게 된다.
  // setTimeout(() => {
  //   setToday(new Date());
  //   setHour(today.getHours());
  //   setMin(today.getMinutes());
  //   setSec(today.getSeconds());
  // }, 1000);

  // 방법2
  useEffect(() => {
    // useEffect state의 상태가 변하면 실행하는 것이다
    const interval = setInterval(() => {
    const today = new Date();
      setToday(today)
      setHour(today.getHours())
      setMin(today.getMinutes())
      setSec(today.getSeconds())
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [today]);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default Time;