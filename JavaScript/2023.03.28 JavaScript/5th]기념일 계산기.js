// 우리 며칠째?
var now = new Date();
var start = new Date("2020-06-30");

var timeDiff = now.getTime() - start.getTime();
var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
$("#love").text(day + "일째");
console.log(day);

// 발렌타인 기념일
var valentine = new Date("2024-02-14");
var timeDiff2 = valentine.getTime() - now.getTime();
var day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);
$("#valentine").text(day2 + "일 남음");

// 2천일은 언제인가?
var ms = start.getTime() + 1999 * (1000 * 60 * 60 * 24);
var thousand = new Date(ms);
var thousandDate = thousand.getFullYear() + "." + (thousand.getMonth() +1) + "." + thousand.getDate()
$("#thousand-date").text(thousandDate);

// 2천일까지 남은 날
// var thousand = new Date(thousandDate); // 이건 안써도 되는 코드
var timeDiff3 = thousand.getTime() - now.getTime();
var day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) +1);
$("#thousand").text(day3 + "일 남음");