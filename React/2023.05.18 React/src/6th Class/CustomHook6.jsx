import React, { useState, useEffect } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'
import Loading from './Loading';

export default function CustomHook6() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
      <Example2/>
    </main>
  )
}

  function CustomHookPractice() {
    const [pics, setPics] = useState([]);
    
    function useScrollHook() {
      const [isBottom, setIsBottom] = useState(false);

      useEffect(() => {
        window.addEventListener("scroll", () => {
          setIsBottom(
            Math.ceil(document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.offsetHeight
          )
        })
      }, [])

      return isBottom
    }

    useScrollHook();


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

  function Example1() {
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
            스크롤 기능 customHook 만들기
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
            <CustomHookPractice />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }




  
  function CustomHookPracticeT() {
    const [pics, setPics] = useState([]);
    const [fetchPage, setFetchPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    function useScrollHookT() {
      const [isBottom, setIsBottom] = useState(false);

      useEffect(() => {
        window.addEventListener("scroll", () => {
          setIsBottom(
            Math.ceil(document.documentElement.scrollTop + window.innerHeight + 100) >= document.documentElement.offsetHeight
          )
        })
      }, [])

      return isBottom
    }

    const isBottom = useScrollHookT()


    useEffect(() => {
      apiData();
    }, [fetchPage])

    useEffect(() => {
      if(isBottom) {
        setFetchPage((prevPage) => {
          return prevPage + 1
        })
      }
    }, [isBottom])

    async function apiData() {
      setIsLoading(true)
      try{
        const response = await fetch(`https://picsum.photos/v2/list?page=${fetchPage}&limit=5`);
        if(!response.ok) {
          throw new Error("네트워크 문제 있음")
        }
        const data = await response.json();
        setPics((prevPic) => {
          return [...prevPic, ...data]
        })
        setIsLoading(false);
      } catch(error) {
        console.error(error)
        setIsLoading(false);
      }
    }

    console.log(pics)
    return (
      <>
        <ul>
          {pics.map((pic) => {
            return (
              <li key={pic.id}>
                <img style={{width: 200, height: 160}} src={pic.download_url} alt={pic.author} />
              </li>
            )
          })}
        </ul>
        {isLoading && <Loading />}
      </>
      
    )
  }

  function Example2() {
    const codeString = `
    `
    
    return (
      <Wrap>
        <Title>CustomHook - 선생님 풀이</Title>
          <p>
            스크롤 기능 customHook 만들기
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
