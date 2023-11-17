import React from 'react'

export default function ComponentList2() {
  return (
    <div>
      <h1>ComponentList2</h1>

      <ItemList1 />
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

