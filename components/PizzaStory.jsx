import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/pizzaStory.module.css";

const PizzaStory = () => {
  return (
    <div id="story" className={styles.conatiner}>
      <h1 className={styles.headerTitle}>Our Pizza stories!</h1>
      <div className={styles.stories}>
        <div className={styles.story}>
          <div className={styles.storyImg}>
            <Image src={"/img/pizza2.jpg"} alt="" width={300} height={400} />
          </div>
          <div className={styles.pizzaText}>
            <div className={styles.title}>Cheese Fountain Pizza</div>
            <div className={styles.text}>
              <p>
                Freshly baked dough topped with marinara sauce, chicken,
                capsicum, mushrooms, black olive, dried oregano, & fresh cut
                mozzarella cheese.
              </p>
              <br />
              <p>
                Using only the freshest ingredients, our pizzas are crafted with
                love to deliver an authentic and unforgettable experience. Join
                us for a slice or two and taste the difference for yourself!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.storyReverse}>
          <div className={styles.storyImg}>
            <Image src={"/img/pizza3.jpg"} alt="" width={300} height={400} />
          </div>
          <div className={styles.pizzaText}>
            <div className={styles.title}>Meaty Onion Pizza</div>
            <div className={styles.text}>
              <p>
                Freshly baked dough topped with sausage, cubed chicken, homemade
                marinara sauce, mozzarella cheese, capsicum, onion, dried
                oregano & parsley.
              </p>
              <br />
              <p>
                Using only the freshest ingredients, our pizzas are crafted with
                love to deliver an authentic and unforgettable experience. Join
                us for a slice or two and taste the difference for yourself!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.story}>
          <div className={styles.storyImg}>
            <Image src={"/img/pizza2.jpg"} alt="" width={300} height={400} />
          </div>
          <div className={styles.pizzaText}>
            <div className={styles.title}>Tender Beef Pizza</div>
            <div className={styles.text}>
              <p>
                Freshly baked dough topped with mashed beef, marinara sauce,
                capsicum, beef pepperoni, fresh oregano & local cottage cheese.
                cheese.
              </p>
              <br />
              <p>
                Using only the freshest ingredients, our pizzas are crafted with
                love to deliver an authentic and unforgettable experience. Join
                us for a slice or two and taste the difference for yourself!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link href={"/pizzas"}>
        <div className={styles.button}>Find out more</div>
      </Link>
    </div>
  );
};

export default PizzaStory;
