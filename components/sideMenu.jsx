import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "../styles/sideMenu.module.css";

const SideMenu = () => {
  return (
    <div>
      <div className={styles.sideMenu}>
        <div className={styles.logo}>
          <Image src="/img/logo.png" alt="" width="60" height="60" />
        </div>
        <Link href={"/"} className={styles.navList}>
          Home
        </Link>
        <Link href={"/pizzas"} className={styles.navList}>
          Pizzas
        </Link>

        <Link href={"/orders"} className={styles.navList}>
          Orders
        </Link>
        <Link href={"/contact"} className={styles.navList}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
