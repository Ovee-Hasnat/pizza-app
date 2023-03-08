import Head from "next/head";
import Featured from "@/components/Featured";
import PizzaStory from "@/components/PizzaStory";
import PizzaPoster from "@/components/pizzaPoster";
import PizzaPoster2 from "@/components/pizzaPoster2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Order your pizza!</title>
        <meta name="description" content="Best pizza in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PizzaPoster2 />
      <Featured />
      <PizzaStory />
      <PizzaPoster />
    </>
  );
}
