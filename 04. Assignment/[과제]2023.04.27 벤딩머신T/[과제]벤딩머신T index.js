import ColaGenerator from "./[과제]벤딩머신T colaGenerator.js";
import VendingMachineEvent from "./[과제]벤딩머신T vendingMachineEvent.js";

const colaGenerator = new ColaGenerator();
const vendingMachineEvent = new VendingMachineEvent();

//? async가 없는데 await가 어떻게 작동하는가?
//* 아래와 같은걸 탑레벨 await: 최상위 모듈에서 실행되는 await라 한다.
// 참고자료: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
await colaGenerator.setup();
vendingMachineEvent.bindEvent();