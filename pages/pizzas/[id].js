import { GetServerSideProps } from "next";
import PizzaDetail from "@/components/PizzaDetail";
import React from "react";

export const getServerSideProps = async (context) => {
  var id = await context.query["id"];
  return {
    props : {
      id
    }
  }
};
const Pizza = (props) => {
  return (
    <div>
      <PizzaDetail id={props.id} />
    </div>
  );
};

export default Pizza;
