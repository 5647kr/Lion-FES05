  // react 컴포넌트 정의하기
  const el = React.createElement;

  class HelloButton extends React.Component {
    // extends: 상속받는다.
    // component: 웹페이지의 UI를 구성하는 가장 작은 단위
    constructor(props) {
      super(props);
      // super: property를 상속받을 때
      this.state = { liked: false };
    }

    render() {
      if (this.state.liked) {
        return 'Hello World!';
      }

      return (
        <button onClick={() => this.setState({ liked: true })}>
          Hello
        </button>
      );
    }
  }

  // DOM에 리액트 컴포넌트 랜더링하기
  const domContainer = document.querySelector('#root');
  ReactDOM.render(el(HelloButton), domContainer);