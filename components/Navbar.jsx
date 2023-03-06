import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.phoneLogo}>
          <Image src="/img/telephone.png" alt="" width="30" height="30" />
        </div>
        <div className={styles.navText}>
          <div className={styles.text}>Order Now</div>
          <div className={styles.text}>012 3456 789</div>
        </div>
      </div>
      <div className={styles.items}>
        <ul className={styles.list}>
          <Link href={"/"} className={styles.navList}>
            Home
          </Link>
          <Link href={"/pizzas"} className={styles.navList}>
            Pizzas
          </Link>
          <div className={styles.logo}>
            <Image src="/img/logo.png" alt="" width="100" height="100" />
          </div>
          <Link href={"/orders"} className={styles.navList}>
            Orders
          </Link>
          <Link href={"/contact"} className={styles.navList}>
            Contact
          </Link>
        </ul>
      </div>
      <div className={styles.items}>
        <Link href={"/orders"}>

        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30" height="30" />
        </div>
        </Link>
        <div className={styles.counter}>2</div>
      </div>
    </div>
  );
};

export default Navbar;
