import styled from "styled-components";

export const Wrap = styled.fieldset`
  border: 1px solid black;
  padding: 50px;
  p {
    padding: 0;
    margin: 0;
    color: #333;
  }
  &:not(:last-child) {
    margin-bottom: 60px;
  }
`

export const Title = styled.legend`
  font-size: 20px;
`

export const ContentWrap = styled.div`
  margin-top: 60px;
  display: flex;
  strong {
    margin-bottom: 20px;
    display: block;
  }
`

export const CodeWrap = styled.div`
  border: 1px solid #000;
  width: 70%;
  padding: 10px;
`

export const ResultWrap = styled(CodeWrap)`
  border-left: 0;
  width: 30%;
`