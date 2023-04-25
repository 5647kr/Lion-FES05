let result = fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
console.log(result);
result.then((data) => {
    console.log(data);
}) // response 객체로 보이며 요청에 대한 종합적인 응답 정보가 저장되어 있는 객체이다.

