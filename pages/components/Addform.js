import React from 'react'
import styles from '../../styles/Form.module.css';

function Addform() {
  return (
    <div className={styles.formbody}>
    <form action='#'>
      <div className={styles.lead_details}>
         <div className={styles.input_box}>
         <label>Full Name:</label>
         <input typeof='text' placeholder='Enter Full Name'></input>
         </div>
         <div className={styles.input_box}>
         <label>Phone Number:</label>
         <input typeof='text' placeholder='Enter Phone Number'></input>
         </div>
         <div className={styles.input_box}>
         <label>Email:</label>
         <input typeof='email' placeholder='Enter Email'></input>
         </div>
         <div className={styles.input_box}>
         <label>Assigned:</label>
         <input typeof='text' placeholder='Assigned'></input>
         </div>
         <div className={styles.input_box}>
         <label>Source:</label>
         <input typeof='text' placeholder='Source'></input>
         </div>
         <div className={styles.input_box}>
         <label>Location:</label>
         <input typeof='text' placeholder='Location'></input>
         </div>
      </div>
      <button className={styles.formbutton}>Add Lead</button>
      </form>
    </div>
  )
}

export default Addform
