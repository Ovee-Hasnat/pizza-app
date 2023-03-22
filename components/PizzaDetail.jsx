"use client";

import pizzaData from "../data/pizzaData.json";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
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

const PizzaDetail = ({ id }) => {
  const router = useRouter();

  const pizzaId = id;

  const [size, setSize] = useState("small");

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  let pM = 0;
  if (size === "large") {
    pM = 3;
  } else if (size === "medium") {
    pM = 2;
  } else {
    pM = 0;
  }

  const pData = pizzaData.filter((pizza) => pizza.id == pizzaId);

  const price = (pData[0].price + pM).toFixed(2);

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
                <MenuItem value={"small"}>Small</MenuItem>
                <MenuItem value={"medium"}>Medium</MenuItem>
                <MenuItem value={"large"}>Large</MenuItem>
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
                margin: "1vh 0 0 0",
              }}
            >
              return
            </Button>

            <Button
              size="medium"
              variant="text"
              onClick={(e) => router.push("/cart")}
              sx={{
                display: "block",
                color: "#d1411e",
              }}
            >
              go to cart
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PizzaDetail;
