import React from 'react'
import styles from '../../styles/Home.module.css';

function Header() {
  return (
    <div className={styles.headercontainer}>
      <a href="#">Sales</a>
      <a href="#">Cancel</a>
      <a href="#">Reject</a>
      <a href="#">All</a>
      <a href="#">Pending</a>
    </div>
  )
}

export default Header
