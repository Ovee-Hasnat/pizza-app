import PizzaList from "@/components/PizzaList";
import React from "react";

const pizzas = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <div
        style={{
          backgroundImage: `url("/img/pizza5.jpg")`,
          height: "50vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              width: "fit-content",
              textTransform: "uppercase",
              fontSize: "5rem",
              fontWeight: "200",
              color: "white",
            }}
          >
            Our Pizzas
          </h1>
        </div>
      </div>
      <PizzaList />
    </div>
  );
};

export default pizzas;
