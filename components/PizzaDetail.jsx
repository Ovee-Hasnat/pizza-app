"use client";

import pizzaData from "../data/pizzaData.json";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/src/Redux/Features/cart/cartSlice";

import styles from "../styles/pizzaDetail.module.css";
import Image from "next/image";
import { Container } from "@mui/system";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const PizzaDetail = () => {
  const router = useRouter();
  //console.log(router.asPath.split("/").slice(2));

  const pizzaId = router.asPath.split("/").slice(2)[0];

  const [size, setSize] = useState(0);

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  const pData = pizzaData.filter((pizza) => pizza.id === parseInt(pizzaId));

  const price = (pData[0].price + size).toFixed(2);

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const productToCart = {
    id: pData[0].id,
    name: pData[0].name,
    image: pData[0].img,
    size: size,
    price: price,
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    dispatch(addToCart(productToCart));
  };

  console.log(cart);

  return (
    <div>
      <Container fixed>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.Imgwrapper}>
              <Image
                src={pData[0].img}
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.name}>{pData[0].name}</h2>
            <div className={styles.ingredients}>
              <mark>Ingredients -</mark>
              {pData[0].ingredients.map((ing) => {
                return <ul>{ing}</ul>;
              })}
            </div>
            <p className={styles.description}>
              {pData[0].description}
              <br />
              <br />
              Using only the freshest ingredients, our pizzas are crafted with
              love to deliver an authentic and unforgettable experience. Join us
              for a slice or two and taste the difference for yourself!
            </p>
            <h2>$ {price}</h2>

            <FormControl
              variant="standard"
              sx={{ margin: "40px 0", minWidth: "220px" }}
            >
              <InputLabel>Choose Size</InputLabel>
              <Select value={size} onChange={handleSize} label="size">
                <MenuItem value={0}>Small</MenuItem>
                <MenuItem value={2}>Medium</MenuItem>
                <MenuItem value={3}>Large</MenuItem>
              </Select>
            </FormControl>

            <Button
              size="large"
              variant="outlined"
              onClick={handleAddToCart}
              sx={{
                display: "block",
                width: "50%",
                bgcolor: "white",
                color: "#d1411e",
                border: "1px solid #d1411e",
                margin: "5vh 0 0",
                "&:hover": {
                  color: "white",
                  bgcolor: "#d1411e",
                  border: "1px solid white",
                },
              }}
            >
              Add to cart
            </Button>
            <Button
              size="medium"
              variant="text"
              onClick={(e) => router.push("/pizzas")}
              sx={{
                margin: "1vh 0",
              }}
            >
              return
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PizzaDetail;
