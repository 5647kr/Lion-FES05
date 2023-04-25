const ul = document.querySelector(".memo_list");
const memo = document.querySelector(".memo");
const add = document.querySelector(".add_memo");
const save = document.querySelector(".save_memo"); 
const cancel = document.querySelector(".cancel_memo"); 
const content = document.querySelector(".content");

// +를 눌러 메모창을 키고 취소를 눌러 메모장 끔
memo.style.display = "none";
add.addEventListener("click", () => {
  memo.style.display = "";
  memo.classList.remove("write")
  memo.classList.add("write")
})
cancel.addEventListener("click", () => {
  memo.style.display ="none"
  memo.classList.remove("write")
})

// 저장버튼을 누르면 작성포스트잇은 사라지고 상단부터 순서대로 우측으로 나열된다.
save.addEventListener("click", () => {
  memo.style.display = "none";
  memo.classList.remove("write")
  if(content.value !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<div class="memo list"></div>`;
    ul.appendChild(li);
    const memolist = document.querySelector(".memo.list");
    const memocontent = document.createElement("p");
    memocontent.innerText = content.value;
    memolist.appendChild(memocontent)
    document.querySelector(".content").value = "";
  }
})




















