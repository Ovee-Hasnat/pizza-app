import PizzaList from "@/components/PizzaList";
import Image from "next/image";
import React from "react";

const pizzas = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", margin: "auto" }}>
          <p
            style={{
              fontSize: "3rem",
              color: "#d1411e",
              textTransform: "uppercase",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Our
            <br />
            Pizza
          </p>
        </div>
        <div
          style={{
            margin: "auto",
            width: "100%",
            height: "500px",
            position: "relative",
          }}
        >
          <Image
            src="/img/pizza2.png"
            alt=""
            fill
            style={{ objectFit: "cover", filter: "blur(2px)" }}
          />
        </div>
      </div>
      <PizzaList />
    </div>
  );
};

export default pizzas;
