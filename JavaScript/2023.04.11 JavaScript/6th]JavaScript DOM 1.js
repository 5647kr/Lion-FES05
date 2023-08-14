console.log("----------실습 해설----------");

const mainform = document.querySelector("#mainForm");
const progress = mainform.querySelector(".bar-progress");
const message = mainform.querySelector(".msg-notice");
const inputs = mainform.querySelectorAll("input");
const btnrest = mainform.querySelector("button[type='reset']");

mainform.addEventListener("keyup", () => {
  let validcounter = 0;

  inputs.forEach((item) => {

    if(item.validity.valid) {
      validcounter++;
    }

  })
  switch(validcounter) {
    case 1:
      message.textContent = "시작했습니다!"
      progress.setAttribute("value", "20");
      break;
    case 2:
      message.textContent = "다음으로 !"
      progress.setAttribute("value", "40");
      break;
    case 3:
      message.textContent = "반이나 했어요!"
      progress.setAttribute("value", "60");
      break;
    case 4:
      message.textContent = "거의 다왔어요!"
      progress.setAttribute("value", "80");
      break;
    case 5:
      message.textContent = "끝났다!"
      progress.setAttribute("value", "100");
      break;
    default: 
      message.textContent = "설문지를 작성하세요!"
      progress.setAttribute("value", "0");
  }
})
btnrest.addEventListener("click", () => {
  message.textContent = "설문지를 작성하세요!"
  progress.setAttribute("value", "0");
})