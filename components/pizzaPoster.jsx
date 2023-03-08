import React from "react";
import Image from "next/image";

import styles from "../styles/pizzaPoster.module.css";

const PizzaPoster = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <div className={styles.posterImg}>
            <Image
              src={"/img/poster.jpg"}
              fill
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.posterText}>
            <p>
              &#8216; There's no problem that can't be solved with pizza.
              &#8217; <br /> <span>- ChatGPT, 2023</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaPoster;
