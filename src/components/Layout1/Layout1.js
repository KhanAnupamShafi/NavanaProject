import React from "react";
import styles from "./Layout1.module.css";

export const data = [
  { name: "Card 1" },
  { name: "Card 2" },
  { name: "Card 3" },
  { name: "Card 4" },
  { name: "Card 5" },
];

const Layout1 = () => {
  return (
    <section className={styles.bg}>
      {data.map((card, index) => {
        return (
          <article className={styles.card}>
            <p>{card.name}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Layout1;
