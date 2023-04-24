const ul = document.querySelector(".memo_list");
const memo = document.querySelector(".memo_write");
const add = document.querySelector(".add_memo");
const save = document.querySelector(".save_memo"); 
const cancel = document.querySelector(".cancel_memo"); 

// +를 눌러 메모창을 키고 취소를 눌러 메모장 끔
memo.style.display = "none";
add.addEventListener("click", () => {
  memo.style.display = "";
  memo.classList.remove("list")
})
cancel.addEventListener("click", () => {
  memo.style.display ="none"
})




// 저장버튼을 누르면 작성포스트잇은 사라지고 상단부터 순서대로 우측으로 나열된다.
save.addEventListener("click", () => {
  const memo_title = document.querySelector(".memotitle").value;
  const memo_content = document.querySelector(".memocontent").value;
  document.querySelector(".memotitle").value = "";
  document.querySelector(".memocontent").value = "";
  console.log(memo_title);
  console.log(memo_content);
  memo.style.display = "none";
  const li = document.createElement("li");
  li.innerHTML = `<div class="memo_write list"></div>`;
  ul.appendChild(li);
  // ul.appendChild(li);
})



























