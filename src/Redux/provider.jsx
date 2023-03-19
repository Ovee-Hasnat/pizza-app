"use client";

const { Provider } = require("react-redux");
const { store } = require("./store");

export function CartProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
