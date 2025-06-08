import React from 'react'

export default function InstallReact() {
  return (
    <div>
      <h1>React 설치</h1>
      <p>React 설치 명령어 새로운 폴더 생성시</p>
      <code>npx create-react-app 생성할폴더명 --template basic-react</code>

      <p>현재 폴더에 생성시</p>
      <code>npx create-react-app . --template basic-react</code>
    </div>
  )
}
