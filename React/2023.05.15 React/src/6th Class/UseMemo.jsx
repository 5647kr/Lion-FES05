import React, {useState, useMemo} from 'react'

export default function UseMemo() {
  return (
    <div>
      <h1>UseMemo</h1>
      {/* 변화가 생기면 재평가 후 새로 랜더링을 한다 */}
      <Memo />
    </div>
  )
}

/**
 *const 저장할변수 = useMemo(()=> {
    return 계산하는_무거운함수()
  }, [감시하고_있는_변수]);
 */

  function 부하() {
    console.log("값 새로 만드는중");
    let s = 0;
    for (let i = 0; i < 1000; i++) {
      s += i;
    }
    console.log("값 새로 만들기 끝");
    return s;
  }
  
  export function Memo() {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
  
    const handleCountUp = (e) => {
      setCount(count + 1);
      console.log(count);
    };
    const handleCountUpTwo = (e) => {
      setCountTwo(countTwo + 1);
      console.log(countTwo);
    };
  
    console.log("랜더링!!");
    // 평소에는 memo되어있는걸 가져다쓰고
    // countTwo가 바뀌었을때 부하 함수를 실행키는 메모
    const result = useMemo(부하, [countTwo]);
  
    return (
      <div className="Memo">
        <h1>계산 결과 : {result}</h1>
        <div>{count}</div>
        <button onClick={handleCountUp}>up!</button>
        <div>{countTwo}</div>
        <button onClick={handleCountUpTwo}>up!</button>
      </div>
    );
  }