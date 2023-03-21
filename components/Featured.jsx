import Image from "next/image";
import React, { useState } from "react";

import styles from "../styles/featured.module.css";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = ["/img/banner3.jpg", "/img/banner2.jpg", "/img/banner1.jpg"];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/img/arrowl.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" fill style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/arrowr.png"
          fill
          alt=""
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Featured;
