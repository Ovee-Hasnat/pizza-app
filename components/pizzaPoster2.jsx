import React from "react";
import styles from "../styles/pizzaPoster2.module.css";

const PizzaPoster2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.heroText}>
          <div className={styles.text1}>experience</div>
          <div className={styles.text2}>pizza perfection</div>
          <div className={styles.text3}>every time.</div>
          <a href="#story">
            <p className={styles.button}>GET STARTED</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PizzaPoster2;
