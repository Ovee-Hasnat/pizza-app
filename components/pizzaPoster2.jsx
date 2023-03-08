import Image from "next/image";
import React from "react";
import styles from "../styles/pizzaPoster2.module.css";

const PizzaPoster2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <Image className={styles.photo} src={"/img/poster2.jpg"} fill />
        </div>
        <div className={styles.tagline}>
          <h1>Bet, <br/ >you can't eat less.</h1>
        </div>
      </div>
    </div>
  );
};

export default PizzaPoster2;
