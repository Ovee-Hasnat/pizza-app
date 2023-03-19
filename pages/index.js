import Head from "next/head";
import Featured from "@/components/Featured";
import PizzaStory from "@/components/PizzaStory";
import PizzaPoster from "@/components/pizzaPoster";
import PizzaPoster2 from "@/components/pizzaPoster2";

export default function Home() {
  return (
    <>
      <PizzaPoster2 />
      <Featured />
      <PizzaStory />
      <PizzaPoster />
    </>
  );
}
