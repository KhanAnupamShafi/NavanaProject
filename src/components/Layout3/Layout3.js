import React from "react";
import { data } from "../Layout1/Layout1";
import styles from "./Layout3.module.css";

const Layout3 = () => {
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

export default Layout3;
