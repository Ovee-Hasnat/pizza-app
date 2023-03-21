import React from "react";
import { removeFromCart } from "@/src/Redux/Features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import styles from "../styles/cart.module.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  let subtotal = 0;
  const dispatch = useDispatch();

  if (cart.length > 0) {
    return (
      <div>
        <div className={styles.container}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Pizza</th>
                <th>Size</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                subtotal = subtotal + parseFloat(item.price);

                const handleCross = () => {
                  dispatch(removeFromCart(cart.indexOf(item)));
                };

                return (
                  <>
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          alt=""
                          style={{ height: "75px", width: "90px" }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.size}</td>
                      <td>${item.price}</td>
                      <td className={styles.cross} onClick={handleCross}>
                        &#10060;
                      </td>
                    </tr>
                  </>
                );
              })}

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                  Total ${subtotal.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <h2 style={{ textAlign: "center" }}>There's no item in your cart.</h2>
    );
  }
};

export default Cart;
