import React from "react";
import PizzaCard from "./pizzaCard";
import pizzaData from "../data/pizzaData.json";

import styles from "../styles/pizzaList.module.css";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      {pizzaData.map((pizza) => (
        <PizzaCard key="pizza.id" data={pizza} />
      ))}
    </div>
  );
};

export default PizzaList;
