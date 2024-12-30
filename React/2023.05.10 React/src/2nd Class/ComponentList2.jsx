import React, {useState} from 'react'

export default function ComponentList2() {
  return (
    <div>
      <h1>ComponentList2</h1>

      <ItemList1 />
      <ItemList2 />
      <ItemList3 />
    </div>
  )
}

export function ItemList1() {
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

export function ItemList2() {
  const [products, setProducts] = useState(productList.products);


  return (
    <ul>
    {products.map((product, index) => {
      return (
        <li key={product.id}>
          <h2>{index + 1} {product.title}</h2>
          <p>{product.price}</p>
          <button onClick={(e) => {e.target.closest("li").remove()}}>삭제{index + 1}</button>
        </li>
      )
    })
    }
    </ul>
  )
}


export function ItemList3() {
  const [products, setProducts] = useState(productList.products);

  function handleClick(id) {
    setProducts(
      products.filter((product) => {
        return id !== product.id
      })
    )
  }

  return (
    <ul>
    {products.map((product, index) => {
      return (
        <li key={product.id}>
          <h2>{index + 5} {product.title}</h2>
          <p>{product.price}</p>
          <button onClick={(e) => {handleClick(product.id)}}>삭제{index + 1}</button>
        </li>
      )
    })
    }
    </ul>
  )
}