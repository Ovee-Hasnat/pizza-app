import PizzaDetail from "@/components/PizzaDetail";
import { SnackbarProvider } from "notistack";
import React from "react";

export const getServerSideProps = async (context) => {
  var id = await context.query["id"];
  return {
    props: {
      id,
    },
  };
};
const Pizza = (props) => {
  return (
    <div>
      <SnackbarProvider>
        <PizzaDetail id={props.id} />
      </SnackbarProvider>
    </div>
  );
};

export default Pizza;
