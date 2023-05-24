// 안녕하세요 -> 요세하녕안
function reverseStr(str) {
  return str.split("").reverse().join("");
}

const str = "안녕하세요";
const reversed = reverseStr(str);
console.log(reversed);

// 강사님 풀이

function reverseStr(str) {
  if(str.length < 2 || typeof str !== "string") {
    return "문자열을 넣어주세요!"
  }

  const data = [];
  const lastIndex = str.length - 1;

  for(let i = lastIndex; i >= 0; i--) {
    data.push(str[i]);
  }
  return data.join("");
}

