import React from 'react'
import styles from "../NavBar.module.css"

const Books = (props) => {
    return (
      <div className={styles.popup_box}>
        <div className={styles.box}>
          <span className={styles.close_icon} onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
    }

  export default Books;

