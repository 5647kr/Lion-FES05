function calendar(newYear, newMonth) {
  // 1. 무슨 요일에 시작하는지 알아야 한다!
  const time = new Date(newYear, newMonth - 1, 1);

  // 2. 해당 월에 며칠이나 있는지 알아야 한다!
  // const timelength = 32 - new Date(newYear, newMonth - 1, 32).getDate();
  const timelength = new Date(newYear, newMonth, 0).getDate(); //! 메모해두기

  let year = time.getFullYear(),
  month = time.getMonth(),
  date = time.getDate(),
  day = time.getDay();

  const captionYear = document.querySelector(".year"),
  captionMonth = document.querySelector(".month"),
  timeEl = document.querySelector("time"),
  days = document.querySelectorAll("tr td");

  for(let i = 0; i < days.length; i++) {
    days[i].innerHTML = "&nbsp;";
  }
  for(let i = day; i < day + timelength; i++) {
    days[i].textContent = date++;
  }

  captionYear.textContent = year;
  captionMonth.textContent = month + 1;
  timeEl.dateTime = `${year}-${month}`
}

const btns = document.querySelectorAll("button");
btns.forEach((item) => {
  item.addEventListener("click", () => {
    if(item.classList.contains("prev")) {
      calendar(year, --month);
    } else {
      calendar(year, ++month);
    }
  })
})

let year = new Date().getFullYear(),
month = new Date().getMonth() + 1; // 달의 인덱스를 뽑아내서 0부터 시작한다.
calendar(year, month);