import React, {useState, useEffect} from 'react'

export default function UseEffect2() {
  return (
    <div>
      <h1>UseEffect2</h1>
      <Counter/>
    </div>
  )
}

export function Counter (){
  const [count, setCount] = useState(0)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const handleCountUp = (e) => {
    setCount(count + 1)
  }

  useEffect(() => {
    if(isFirstRender) {
      setIsFirstRender(false)
      console.log('처음 실행')
      console.log(isFirstRender)
    } else {
      if(count % 2){
        alert("홀수입니다")
      }else{
        alert("짝수입니다")
      }
    }
  }, [count, isFirstRender]) 

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}
