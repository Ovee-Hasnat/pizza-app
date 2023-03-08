import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import styles from "../styles/pizzaCard.module.css";

const PizzaCard = (props) => {
  const router = useRouter();
  const orderNowHandler = () => {
    router.push(`/pizzas/${props.data.id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.itemWrapper}>
        <Box width="400px" padding="10px" height="auto" margin="10px">
          <Card>
            <CardMedia
              component="img"
              height="400px"
              image={`/img/pizzalist${props.data.id}.jpg`}
              alt={props.data.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h4">
                {props.data.name} Pizza
              </Typography>
              <Typography gutterBottom variant="h5" color="#d1411e">
                ${props.data.price}
              </Typography>
              <div
                className={styles.cardContent}
                style={{
                  height: "180px",
                  overflowY: "scroll",
                }}
              >
                <Typography gutterBottom variant="body1">
                  Ingredients used -
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {props.data.ingredients.map((ing) => (
                    <li key={ing}>{ing}</li>
                  ))}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {props.data.description}
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                variant="outlined"
                onClick={orderNowHandler}
                sx={{
                  width: "50%",
                  bgcolor: "white",
                  color: "#d1411e",
                  border: "1px solid #d1411e",
                  margin: "auto",
                  "&:hover": {
                    color: "white",
                    bgcolor: "#d1411e",
                    border: "1px solid white",
                  },
                }}
              >
                Order Now
              </Button>
            </CardActions>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default PizzaCard;
