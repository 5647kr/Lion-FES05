const arrpic = [
  "https://i.namu.wiki/i/JPObpOPQ--82PT9cyPfaN-p_IhrCN3sW44cC4gMeUfo42ig7vWkFH0viqgYjpq8Q-9Ecz516Nt9VM3rgiA8Xwwc3VVYzq_6Uk1Y7xn4DeGcmOQ9KZ--8GufK0o93DJE_HLfzWrYYSGpC2zzlR75H_Q.webp",
  "https://i.namu.wiki/i/zBRrWhuGvFgwKlOs_QaMBi-uvGuNRzg1NaQ3ODPuhBw2mJ4S6JuGzWgThkWesKIMRAnKhamel2dvVf-sgYy4TtCimko48LBI4GTBTkv0tlP8MykVYEHeAsVQcOPzs_2oc1Sz_yxps7Y_KWiP9oghPw.webp",
  "https://i.namu.wiki/i/vQ30jJKHCghW9jAOnOVNw25EjymcSPyI9CceUt8gVPQwtsVtLHaA2SeCSQQGk6do2nNm5VlW0n_M9fLqjxd5JSqxD2tfRJigEwxBizRJqMSSEuerZ1rraAw7WqD9-4UVmzsAWLkoPZk7WwKG2EFObQ.webp",
  "https://i.namu.wiki/i/zMEbNlXZLIEYSohHQ5s2VN4YT117czJmE6Q6mOuwydaqS717dePaxNzWWAdMcHZq-O5hMReuIYSuB2QIVOCprp0_XwhXzy9ms-1dDfkGVCx2JwOyXzjW_djHJKpsAaA5WcxejkwpKVleqNafhS8hig.webp",
  "https://i.namu.wiki/i/JApQaYMSBzJ8F0-PzAODERk1tlm6MhdxuGJM3C2J11D48yJFONXn6MOrZVxSDlH5etw8PVdAIUrkiYfzohM7LrmYuBRQQQ_GQavippuFPP3XUanqTnMx76D5vZYBECc0XBqontaiAke1vKnVC2-k9Q.webp",
  "https://i.namu.wiki/i/myk-Xzv1rMwSYhKPLhB7NHWbWUZoiQgoea3vRTgk7Mk86MK1iSvnzlU07szc7NcGFy3MtSQawWUEadtfF4PzMK5RTVva05Pt1v1MLvx4fO8rg2s2JeRrpUePHmEWidKwHAuK7VM53uBvObgGxi6nhA.webp",
  "https://i.namu.wiki/i/N2vRFZYvwq3bCGTbu3Z1AhractiQXizBpCthDNZYFAvjopWsNlypBkTGH1vJ-lJkW56YoaAnJInuwCnaLReq2iiFN5x4XrbVRS4jhwWfE5Jbq9WHOo73EXMssktrWQmcFv2WbzPvFBPKnN-RG3nhGw.webp"
];
const center = document.querySelector(".list-item");

arrpic.forEach((item) => {
  const elli = document.createElement("li");
  elli.innerHTML = `<img src="${item}" alt="">`;
  center.appendChild(elli);
})

const items = document.querySelectorAll(".list-item li");

const radius = items[0].offsetWidth * items.length / 3.14 / 2;

items.forEach((item, index) => {
  item.style.transform = `rotateY(${360 / items.length * index}deg) translateZ(${radius}px)`;
  })

const angle = 360 / items.length;
let currangle = 0;

document.addEventListener("click", (event) => {
  if(window.innerWidth / 2 < event.clientX) {
    currangle += angle;
  } else {
    currangle -= angle;
  }
  center.style.transform = `translate(-50%, -50%) rotateY(${currangle}deg)`;
});


