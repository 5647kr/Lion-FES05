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

export default Hello;