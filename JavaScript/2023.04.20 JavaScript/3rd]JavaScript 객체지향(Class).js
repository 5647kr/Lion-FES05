// 간단한 투두 리스트기능 구현해보기
/* 
1. 해야할 일 Todo 클래스 (내용, 상태 두 가지 프로퍼티를 가집니다.)

2. Todo 클래스는 상태를 변경하는 changeState 메서드를 가집니다.

3. 할일의 목록을 관리하는 관리자를 추상화한 TodoManager 클래스 (할일 목록을 프로퍼티로 가집니다.)

4. 할 일을 저장하고(addItem), 할 일의 목록을 보여주며(getItems), 할 일의 남은 갯수를 반환하는(getLeftTodoCount) 세 가지 메소드를 가집니다.
*/

class Todo {
  constructor(content) {
    this.content = content;
  }
  todo () {
    console.log(`해야할 일: ${this.content}`);
  }
}

const list = new Todo("기타치기");
console.log(list.content);

console.log("----------class 실습 해설----------");

class Todo1 {
  constructor(item1, finished1) {
    this.item1 = item1;
    this.finished1 = finished1;
  }
  changestate1() {
    this.finished1 = !this.finished1
  }
}

class Todomanager {
  constructor() {
    this.todoList1 = [];
  }
  additem1(item1, finished1 = false) {
    const todo1 = new Todo1(item1, finished1);
    this.todoList1.push(todo1);
  }
  getitems() {
    return this.todoList1;
  }
  getlefttodocount() {
    this.todoList1.reduce((total, current) => {
      if(current.finished1 === false) {
        return ++total;
      } else {
        return total;
      }
    }, 0)
  }
}

const list1 = new Todo1("점심먹기", false);
console.log(list1);
list1.changestate1();
console.log(list1);

const manager = new Todomanager();
console.log(manager);
manager.additem1("청소하기");
manager.additem1("청소하기");
manager.additem1("청소하기");
manager.additem1("청소하기");
manager.additem1("청소하기");
console.log(manager);
manager.getitems();
console.log(manager);
manager.getitems()[0].changestate1();
manager.getitems();
console.log(manager);
manager.getlefttodocount();
console.log(manager);