console.log("----------stopPropagation 실습----------");

const txt = document.querySelector("p");
const btn = document.querySelectorAll("button");

txt.addEventListener("click", (e) => {
  alert(e.Content);
})
