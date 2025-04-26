import React, {useState} from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function ComponentList2() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
      <Example2/>
      <Example3/>
    </main>
  )
}








function ComponentListPractice1() {
  const list = [
    {id: 1, name: "해장국"},
    {id: 2, name: "김치찌개"},
    {id: 3, name: "된장찌개"}
  ]

  const itemlist = [];

  list.forEach((item) => {
    //! forEach는 return을 지원하지 않아, 직접 밖으로 빼주는 작업을 해야한다.
    itemlist.push(<li key={item.id}>{item.name}</li>)
  })
  return (
    <div>
      <ul>
        {itemlist}
      </ul>
    </div>
  )
}


function Example1() {
  const codeString = `
function ComponentListPractice1() {
  const list = [
    {id: 1, name: "해장국"},
    {id: 2, name: "김치찌개"},
    {id: 3, name: "된장찌개"}
  ]

  const itemlist = [];

  list.forEach((item) => {
    itemlist.push(<li key={item.id}>{item.name}</li>)
  })
  return (
    <div>
      <ul>
        {itemlist}
      </ul>
    </div>
  )
}
  `
  
  return (
    <Wrap>
      <Title>ComponentList</Title>
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
          <ComponentListPractice1 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}


const productList = {
  products: [
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103
    },
    {
      title: "버그를 Java라 버그 잡는 개리씨 키링",
      price: 29000,
      id: 104
    },
  ]
}


function ComponentListPractice2() {
  const [product, setProduct] = useState(productList.products);

  function delItem(id) {
    setProduct(
      product.filter((item) => item.id !== id)
    )
  }
  return (
    <div>
      <ul>
        {product.map((item) => {
          return (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <button onClick={() => {delItem(item.id)}}>삭제</button>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

function Example2() {
  const codeString = `
const productList = {
  products: [
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103
    },
    {
      title: "버그를 Java라 버그 잡는 개리씨 키링",
      price: 29000,
      id: 104
    },
  ]
}


function ComponentListPractice2() {
  const [product, setProduct] = useState(productList.products);

  function delItem(id) {
    setProduct(
      product.filter((item) => item.id !== id)
    )
  }
  return (
    <div>
      <ul>
        {product.map((item) => {
          return (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <button onClick={() => {delItem(item.id)}}>삭제</button>
          </li>
          )
        })}
      </ul>
    </div>
  )
}
  `
  
  return (
    <Wrap>
      <Title>ComponentList dom 제어 실습</Title>
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
          <ComponentListPractice2 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}




function ComponentListPractice3() {
  const [product, setProduct] = useState(productList.products);

  return (
    <div>
      <ul>
        {product.map((item) => {
          return (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <button onClick={(e) => {e.target.closest("li").remove()}}>삭제</button>
          </li>
          )
        })}
      </ul>
    </div>
  )
}


function ComponentListPractice4() {
  const [products, setProducts] = useState(productList.products);

  function handleClick(id) {
    setProducts(
      products.filter((product) => {
        return id !== product.id
      })
    )
  }

  return (
    <>
      <ul>
      {products.map((product, index) => {
        return (
          <li key={product.id}>
            <h2>{index + 5} {product.title}</h2>
            <p>{product.price}</p>
            <button onClick={() => {handleClick(product.id)}}>삭제{index + 1}</button>
          </li>
        )
      })
      }
      </ul>
    </>
  )
}

function Example3() {
  const codeString = `
// JS로 DOM 제어
function ComponentListPractice3() {
  const [product, setProduct] = useState(productList.products);

  return (
    <div>
      <ul>
        {product.map((item) => {
          return (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <button onClick={(e) => {e.target.closest("li").remove()}}>삭제</button>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

// React로 DOM 제어
function ComponentListPractice4() {
  const [products, setProducts] = useState(productList.products);

  function handleClick(id) {
    setProducts(
      products.filter((product) => {
        return id !== product.id
      })
    )
  }

  return (
    <>
      <ul>
      {products.map((product, index) => {
        return (
          <li key={product.id}>
            <h2>{index + 5} {product.title}</h2>
            <p>{product.price}</p>
            <button onClick={() => {handleClick(product.id)}}>삭제{index + 1}</button>
          </li>
        )
      })
      }
      </ul>
    </>
  )
}
  `
  
  return (
    <Wrap>
      <Title>ComponentList dom 제어 실습T</Title>
      <p>JS로 DOM 제어하기</p>
      <p>React로 DOM 제어하기</p>
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
          <ComponentListPractice3 />
          <ComponentListPractice4 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}

