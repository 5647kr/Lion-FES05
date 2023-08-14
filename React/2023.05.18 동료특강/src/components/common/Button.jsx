import React from 'react'

export default function Button() {
  return (
    <BtnStyle>Button</BtnStyle>
  )
}
const BtnStyle = styled.button`
  padding: 21px 49px;
  font-size: 24px;
  line-height: 24px;
  font-family: GmarketSansBold;
  color: #5B2386;
  background-color: #FCEE21;
  border-radius: 56px;
  cursor: pointer;
  border: none;
`