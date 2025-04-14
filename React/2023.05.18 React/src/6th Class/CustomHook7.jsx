import React, { useState, useEffect } from 'react'
import Loading from './Loading';

  export default function CustomHook7() {
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
                <img style={{width: 600, height: 360}} src={pic.download_url} alt={pic.author} />
              </li>
            )
          })}
        </ul>
        {isLoading && <Loading />}
      </>
      
    )
  }
