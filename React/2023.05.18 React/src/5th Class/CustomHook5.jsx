import React, { useState, useEffect } from 'react'

  export default function CustomHook5() {
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
      <>
        <h2>콘솔 확인</h2>
        <ul>
          {pics.map((pic) => {
            return (
              <li key={pic.id}>
                <img style={{width: 600, height: 360}} src={pic.download_url} alt={pic.author} />
              </li>
            )
          })}
        </ul>
      </>
    )
  }
