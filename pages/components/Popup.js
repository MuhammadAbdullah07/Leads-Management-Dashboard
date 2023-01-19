import React from 'react';
import styles from '../../styles/Home.module.css';

export default function popup() {
  return (
    <div>
    <div className={styles.popup}>
    <ul>
            <li><a href='#'>Countries</a></li>
            <li><a href='#'>Platforms</a></li>
            <li><a href='#'>Reasons</a></li>
            <li><a href='#'>Results</a></li>
    </ul>
  </div> 
    </div>
  )
}
