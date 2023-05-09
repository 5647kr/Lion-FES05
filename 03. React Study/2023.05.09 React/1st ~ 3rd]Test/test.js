const times = document.querySelectorAll("input");
const hrs = document.querySelector(".time-hrs");
const min = document.querySelector(".time-min");
const sec = document.querySelector(".time-sec");
const start = document.querySelector(".start-btn");
const reset = document.querySelector(".reset-btn");
/**
 *1. 시간이 입력되면 버튼의 색이 변한다
   */
if(parseInt(times.value !== 0)) {
  console.log("0 아님");
}