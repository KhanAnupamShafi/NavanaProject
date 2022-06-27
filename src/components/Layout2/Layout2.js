import React from "react";
import { data } from "../Layout1/Layout1";
import styles from "./Layout2.module.css";

const Layout2 = () => {
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

export default Layout2;
