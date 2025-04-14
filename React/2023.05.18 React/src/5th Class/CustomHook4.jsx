import React, { useState, useEffect } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function CustomHook4() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
      <Example2/>
    </main>
  )
}

  function CustomHookPractice1() {
    const [pics, setPics] = useState([]);

    useEffect(() => {
      async function apiData() {
        try{
          const response = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
          if(!response.ok) {
            throw new Error("네트워크 문제 있음")
          }
          const data = await response.json();
          setPics(data)
        } catch(error) {
          console.error(error)
        }
      }
      apiData();
    }, [])

    console.log(pics)
    return (
      <ul>
        {pics.map((pic) => {
          return (
            <li key={pic.id}>
              <img style={{width: 200, height: 160}} src={pic.download_url} alt={pic.author} />
            </li>
          )
        })}
      </ul>
    )
  }

  function Example1() {
    const codeString = `
      function CustomHookPractice1() {
        const [pics, setPics] = useState([]);
        
        useEffect(() => {
          async function apiData() {
            try{
              const response = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
              if(!response.ok) {
                throw new Error("네트워크 문제 있음")
              }
              const data = await response.json();
              setPics(data)
            } catch(error) {
              console.error(error)
            }
          }
          apiData();
        }, [])

        console.log(pics)
        return (
          <ul>
            {pics.map((pic) => {
              return (
                <li key={pic.id}>
                  <img  style={{width: 100, height: 100}} src={pic.download_url} alt={pic.author} />
                </li>
              )
            })}
          </ul>
        )
      }
    `
    
    return (
      <Wrap>
        <Title>CustomHook</Title>
          <p>
            customHook을 이용한 API통신
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




  function CustomHookPracticeT() {
    const [pics, setPics] = useState([]);
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setIsBottom(
          document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight
        )

        console.log(document.documentElement.scrollTop + window.innerHeight);

        console.log(document.documentElement.offsetHeight)
      })
    }, [])

    useEffect(() => {
      apiData();
    }, [])

    async function apiData() {
      try{
        const response = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
        if(!response.ok) {
          throw new Error("네트워크 문제 있음")
        }
        const data = await response.json();
        setPics(data)
      } catch(error) {
        console.error(error)
      }
    }

    console.log(pics)
    return (
      <ul>
        {pics.map((pic) => {
          return (
            <li key={pic.id}>
              <img style={{width: 200, height: 160}} src={pic.download_url} alt={pic.author} />
            </li>
          )
        })}
      </ul>
    )
  }

  function Example2() {
    const codeString = `
      function CustomHookPracticeT() {
        const [pics, setPics] = useState([]);

        useEffect(() => {
          apiData();
        }, [])

        async function apiData() {
          try{
            const response = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
            if(!response.ok) {
              throw new Error("네트워크 문제 있음")
            }
            const data = await response.json();
            setPics(data)
          } catch(error) {
            console.error(error)
          }
        }

        console.log(pics)
        return (
          <ul>
            {pics.map((pic) => {
              return (
                <li key={pic.id}>
                  <img style={{width: 200, height: 160}} src={pic.download_url} alt={pic.author} />
                </li>
              )
            })}
          </ul>
        )
      }
    `
    
    return (
      <Wrap>
        <Title>CustomHook</Title>
          <p>
            customHook을 이용한 API통신
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
            <CustomHookPracticeT />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }
