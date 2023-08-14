import MoodT from "./HookUseState_MoodT/HookUseState_MoodT";
import MenuListT from "./HookUseState_MenuListT/HookUseState_MenuListT";
import { useState } from "react";

function App() {
  const [currentMood, setCurrentMood] = useState("");
  return (
    <div>
      <MenuListT mood={currentMood} onItemClick={setCurrentMood}/>
      <MoodT mood={currentMood}/>
    </div>
  );
}

export default App;


//     컴포넌트 구조
//         app
//        /   \ 
// btnlist    상태
//    |        |(데이터 통신이 안됨)
//   btn(mood라는 상태) <- useState

// 부모컴포넌트 -> 자식컴포넌트로 데이터통신만 가능하다
// 그래서 btn의 mood상태를 부모인 상태컴포넌트로 보내야한다.
// 그럼 btn -> btnlist -> app -> 상태로 가야한다
//? 자식컴포넌트에서 부모컴포넌트로 데이터통신이 안된다 했는데?
// 부모컴포넌트에 있는 상태를 바꿀수 있는 메소드를 자식컴포넌트로 보내 
// 자식컴포넌트에서 그 메소드를 바꾸면 부모컴포넌트도 변하게 된다.
// 이를 상태 끌어올리기라 한다.

