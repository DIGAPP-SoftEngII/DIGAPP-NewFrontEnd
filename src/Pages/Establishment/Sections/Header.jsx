import React from "react";
import styles from "./Styles.module.css";

function Header({ img, tittle }) {
  return (
    <>
      <main>
        <img src={img} className={styles.header__img} />
        <h1 className={styles.header__tittle}>{tittle}</h1>
      </main>
    </>
  );
}

export default Header;
