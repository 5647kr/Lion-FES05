import Hello from "./Components2_Hello";
import Time from "./Components2_Time";
import Resume from "./Components2_Resume";
import ResumeT from "./Components2_ResumeT";

function App() {
  return (
    <div>
		<Hello name="Gary"/>{/* 라이켓 모음 */}
		<Time />{/* 시간보여주기 */}
    <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue" />
    <ResumeT hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue" />

    </div>
  );
}

export default App;