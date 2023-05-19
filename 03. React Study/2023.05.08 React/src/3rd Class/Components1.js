function Hello(props) {
  // props로 넘길수 있는 데이터는 문자열, 숫자형 등등 심지어 JSX 까지 데이터를 넘길 수 있다.
  const name = '라이캣!';
  const someStyle = {backgroundColor:"black", color:"white"};
  return(
    <div>
      <h1 style={someStyle}>안녕, {props.name} 1호</h1>
      <h1>안녕, {props.name} 2호!</h1>
      <div className="newClass"/>
    </div>
  );
}

function Time() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  return(
    <div style={{backgroundColor:"black", color:"white"}}>
      <h1 style={{color:'red'}}>년 : {year}</h1>
      <h1>월/일 : {month}/{date}</h1>
      <h1>시간 : {hour}시 {min}분 {sec}초</h1>
    </div>
  );
}

function HelloProps(props) {
  return (
    <div>
      <p>my name is {props.name} and age is {props.age}</p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  )
}

function App() {
  return (
    <div>
		<Hello name="Gary"/>{/* 라이켓 모음 */}
		<Time />{/* 시간보여주기 */}
    <HelloProps 
			name="jaehyun" 
			age={25} 
			someFunc={() => 'awesome!!!'} 
			someJSX={<img src="https://picsum.photos/id/237/200/300" />} 
			someArr={[1, 2, 3]} 
			someObj={{ one: 1 }} />
    </div>
  );
}

export default App;