import React from 'react'
import { UserInfo } from './HelloLicat1'

export default function HelloLicat2() {
  return (
    <UserInfo.Consumer>
      {(value) => {
        console.log(value);
        return <div>{value.id}hello{value.name}</div>
      }}
    </UserInfo.Consumer>
  )
}
