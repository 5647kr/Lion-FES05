import React, { Component } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function LifeCycle1() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
    </main>
  )
}

  class ClassComp extends Component {
    constructor(props) {
      super(props);
      this.state = { number: 0 };
    }
  
    componentWillMount() {
      //컴포넌트가 생성될 때 실행됩니다. (렌더링 되기 이전)
      console.log("componentWillMount");
    }
  
    componentDidMount() {
    //마운트가 완료되고 나서 실행됩니다. (렌더링 이후) 
      console.log("componentDidMount");
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      //상태 업데이트가 되고 컴포넌트가 업데이트 되기 전(렌더되기 전) 실행됩니다.
      //초기 렌더링에서 발생하지 않습니다.
      console.log("shouldComponentUpdate");
      return true;
    }
  
    componentWillUpdate(nextProps, nextState) {
      //UNSAFE_componentWillUpdate()로 변경됨, 17버전까지는 사용 가능합니다.
      //초기 렌더링에서 발생하지 않고, 그 이후 업데이트가 되고 나서 발생합니다.
      console.log("componetWillUpdate");
    }
  
    componentDidUpdate(nextProps, nextState) {
      //업데이트가 되고 나서 실행됩니다.
      console.log("componentDidUpdate");
    }
  
    componentWillUnmount() {
     //컴포넌트가 제거되기 바로 직전에 실행됩니다.
      console.log("componentWillUnmount");
    }
    
  
    handleClick = () => {
      this.setState((state) => {
        return {
          number: state.number + 1,
        };
      });
    };
  
    render() {
      console.log("render");
      return (
        <div>
          <button onClick={this.handleClick}>Click me!</button>
          <span>{this.state.number}</span>
        </div>
      );
    }
  }
  
  class App extends Component {
    render() {
      return <ClassComp />;
    }
  }



  function Example1() {
    const codeString = `
      class ClassComp extends Component {
        constructor(props) {
          super(props);
          this.state = { number: 0 };
        }
      
        componentWillMount() {
          //컴포넌트가 생성될 때 실행됩니다. (렌더링 되기 이전)
          console.log("componentWillMount");
        }
      
        componentDidMount() {
        //마운트가 완료되고 나서 실행됩니다. (렌더링 이후) 
          console.log("componentDidMount");
        }
      
        shouldComponentUpdate(nextProps, nextState) {
          //상태 업데이트가 되고 컴포넌트가 업데이트 되기 전(렌더되기 전) 실행됩니다.
          //초기 렌더링에서 발생하지 않습니다.
          console.log("shouldComponentUpdate");
          return true;
        }
      
        componentWillUpdate(nextProps, nextState) {
          //UNSAFE_componentWillUpdate()로 변경됨, 17버전까지는 사용 가능합니다.
          //초기 렌더링에서 발생하지 않고, 그 이후 업데이트가 되고 나서 발생합니다.
          console.log("componetWillUpdate");
        }
      
        componentDidUpdate(nextProps, nextState) {
          //업데이트가 되고 나서 실행됩니다.
          console.log("componentDidUpdate");
        }
      
        componentWillUnmount() {
        //컴포넌트가 제거되기 바로 직전에 실행됩니다.
          console.log("componentWillUnmount");
        }
        
      
        handleClick = () => {
          this.setState((state) => {
            return {
              number: state.number + 1,
            };
          });
        };
      
        render() {
          console.log("render");
          return (
            <div>
              <button onClick={this.handleClick}>Click me!</button>
              <span>{this.state.number}</span>
            </div>
          );
        }
      }
      
      class App extends Component {
        render() {
          return <ClassComp />;
        }
      }
    `
    
    return (
      <Wrap>
        <Title>LifeCycle</Title>
          <p>
          클래스 컴포넌트에서 확인하는 라이프 사이클입니다. 컴포넌트의 생애주기는 크게 세 가지로 나눌 수 있습니다.
          </p>
          <ul>
            <li>마운트</li>
            <li>업데이트</li>
            <li>언마운트</li>
          </ul>

          <h2>마운트- 처음 컴포넌트가 나타낫을 때</h2>
          <p>처음 state와 props를 가지고 컴포넌트를 생성한다.</p>

          <h2>업데이트- 컴포넌트 상태값이 바뀔 때</h2>
          <p>마운트가 완전히 완료된 후 상태값이나 prop의 변화가 생겼을 때, 리액트는 이를 감지하고 컴포넌트에 업데이트한다.</p>

          <h2>언마운트- 컴포넌트가 사라질 때</h2>
          <p>언마운트에서는 `componentWillUnmount`가 실행됩니다. 컴포넌트를 완전히 DOM에서 제거하는 시점이다. <br />
          componentWillUnmount : 컴포넌트가 사라지기 바로 직전에 호출됩니다.</p>




        <ContentWrap>
          <CodeWrap>
            <strong>코드</strong>
            <pre>
              <code>
                {codeString}
              </code>
            </pre>
          </CodeWrap>
          <ResultWrap>
            <strong>실행 결과</strong>
            <App />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }