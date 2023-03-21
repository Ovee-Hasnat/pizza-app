import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import styles from "../styles/navbar.module.css";
import SideMenu from "./sideMenu";

const Navbar = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  const sideMenuHandler = () => {
    setsideMenu(!sideMenu);
  };

  return (
    <>
      {sideMenu && <SideMenu />}
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
            <Link href={"/"}>
              <div className={styles.logo}>
                <Image src="/img/logo.png" alt="" width="90" height="90" />
              </div>
            </Link>
            <Link href={"/orders"} className={styles.navList}>
              Orders
            </Link>
            <Link href={"/contact"} className={styles.navList}>
              Contact
            </Link>
          </ul>
        </div>
        <div className={styles.items}>
          <Link href={"/cart"}>
            <div className={styles.cart}>
              <Image src="/img/cart.png" alt="" width="30" height="30" />
            </div>
          </Link>
          <div className={styles.counter}>{cart.length}</div>
        </div>
        <div className={styles.items}>
          <div className={styles.collapseMenu} onClick={sideMenuHandler}>
            <div className={styles.dash}></div>
            <div className={styles.dash}></div>
            <div className={styles.dash}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
