import React from 'react'
import loadingImg from "./loading.gif"
import styles from "./Loading.module.css"

export default function Loading() {
  return (
    <img src={loadingImg} alt="" className={styles.imgLoading}/>
  )
}
