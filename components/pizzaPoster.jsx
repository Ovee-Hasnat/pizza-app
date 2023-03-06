import React from "react";
import Image from "next/image";

import styles from "../styles/pizzaPoster.module.css";

const PizzaPoster = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
            <Image src={"/img/poster.jpg"} alt="" height={730} width={520} />
        </div>
        <div className={styles.right}>
          <p>
            Life
            <br />
            is
            <br /> short,
            <br />
            eat
            <br /> some <br />
            pizza.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PizzaPoster;
