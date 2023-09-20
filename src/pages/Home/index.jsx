import React from 'react'
import styles from './home.module.css'
import { Dropdown, Graphs } from "../../components";
import { Header} from "../../layout";

const index = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Dropdown />
      <Graphs />
    </div>
  )
}

export default index