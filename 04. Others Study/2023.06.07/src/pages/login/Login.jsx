import React, { useInsertionEffect, useState } from 'react'
import logo from '../../img/logo.svg'
import styles from './Login.module.css'

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleData = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  }


  return (
    <>
      <main>
        <h2 className={styles["img-title"]}>
          <img src={logo} alt="" />
          <strong className="line">로그인</strong>
        </h2>
        <form className={styles["form-wrap"]} onSubmit={handleSubmit}>
          <label className="label-style" htmlFor="user-email">이메일</label>
          <input className="input-style" id="user-email" type="email" required autoComplete='current-username' onChange={handleData} value={email}/>
          <label className="label-style" htmlFor="user-pw">비밀번호</label>
          <input className="input-style" id="user-pw" type="password" required autoComplete='current-password' onChange={handleData} value={password}/>
          <button className="black-btn" type="submit">로그인</button>
        </form>
      </main>

      <footer>
        <p>Copyright 2023. WENIV All rights reserved.</p>
      </footer>
    </>
  )
}
