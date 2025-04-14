import React, { useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function CustomHook1() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
      <Example2/>
    </main>
  )
}

  function CustomHookPractice1() {
    function InputComponent() {
      const [value, setValue] = useState('');
      function onChange(e) {
          setValue(e.target.value);
      }
      return (
          <>
              <input type="text" onChange={onChange}/>
              <div>
                  {value}
              </div>
          </>
      )
    }

    function SomethingComponent() {
      const [value, setValue] = useState('');
      function onChange(e) {
          setValue(e.target.value);
      }
      return (
          <>
              <input type="text" onChange={onChange}/>
              <div>
                  {value}가 강해졌다 돌격해!
              </div>
          </>
      )
    }

    return (
      <>
        <InputComponent />
        <SomethingComponent />
      </>
    )
  }



  function Example1() {
    const codeString = `
      function CustomHookPractice() {
        function InputComponent() {
          const [value, setValue] = useState('');
          function onChange(e) {
              setValue(e.target.value);
          }
          return (
              <>
                  <input type="text" onChange={onChange}/>
                  <div>
                      {value}
                  </div>
              </>
          )
        }

        function SomethingComponent() {
          const [value, setValue] = useState('');
          function onChange(e) {
              setValue(e.target.value);
          }
          return (
              <>
                  <input type="text" onChange={onChange}/>
                  <div>
                      {value}가 강해졌다 돌격해!
                  </div>
              </>
          )
        }

        return (
          <>
            <InputComponent />
            <SomethingComponent />
          </>
        )
      }
    `
    
    return (
      <Wrap>
        <Title>CustomHook</Title>
          <p>
            중복되는 코드들을 위에서 볼 수 있다. 따라서 아래와 같이 CustomHook을 이용해 관리할 수 있다.
          </p>

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
            <CustomHookPractice1 />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }




  function CustomHookPractice2() {
    function useInput(initState) {
      const [value, setValue] = useState(initState);
      function onChange(e) {
        setValue(e.target.value);
      }
      return [value, onChange];
    } 

    function InputComponent() {
      const [value, onChange] = useInput("");
      return (
        <>
          <input type="text" onChange={onChange}/>
          <div>
            {value}
          </div>
        </>
      )
    }

    function SomethingComponent() {
      const [value, onChange] = useInput("");
      return (
        <>
          <input type="text" onChange={onChange}/>
          <div>
            {value}가 강해졌다 돌격해!
          </div>
        </>
      )
    }

    return (
      <>
        <InputComponent />
        <SomethingComponent />
      </>
    )
  }



  function Example2() {
    const codeString = `
      function CustomHookPractice2() {
        function useInput(initState) {
          const [value, setValue] = useState(initState);
          function onChange(e) {
            setValue(e.target.value);
          }
          return [value, onChange];
        } 
        
        function InputComponent() {
          const [value, onChange] = useInput("");
          return (
            <>
              <input type="text" onChange={onChange}/>
              <div>
                {value}
              </div>
            </>
          )
        }

        function SomethingComponent() {
          const [value, onChange] = useInput("");
          return (
            <>
              <input type="text" onChange={onChange}/>
              <div>
                {value}가 강해졌다 돌격해!
              </div>
            </>
          )
        }

        return (
          <>
            <InputComponent />
            <SomethingComponent />
          </>
        )
      }
    `
    
    return (
      <Wrap>
        <Title>CustomHook</Title>
          <p>
            중복되는 코드들을 위에서 볼 수 있다. 따라서 아래와 같이 CustomHook을 이용해 관리할 수 있다.
          </p>

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
            <CustomHookPractice2 />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }