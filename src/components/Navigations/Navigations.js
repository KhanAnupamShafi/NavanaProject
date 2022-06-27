import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Navigations.module.css";

const Navigations = () => {
  let activeStyle = {
    backgroundColor: "rgba(96, 96, 96, 1)",
  };

  return (
    <>
      <nav>
        <NavLink
          to="/layout1"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <section className={styles.layout}>Layout 1</section>
        </NavLink>
        <NavLink
          to="/layout2"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <section className={styles.layout}>Layout 2</section>
        </NavLink>
        <NavLink
          to="/layout3"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <section className={styles.layout}>Layout 3</section>
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigations;
