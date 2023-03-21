import Cart from "@/components/Cart";
import React from "react";

const cart = () => {
  return (
    <div>
      <div
        style={{
          height: "auto",
          minHeight: "calc(100vh - 120px)",
          marginTop: "120px",
        }}
      >
        <h1 style={{ textAlign: "center", margin: "2vh 0" }}>Your cart</h1>
        <Cart />
      </div>
    </div>
  );
};

export default cart;
