import React from "react";
import styles from "./Hero.module.css";

export const Hero = ({ imgSrc }) => {
  return (
    <div className={styles.hero}>
      <img src={imgSrc} alt="coworking" className={styles.hero__image} />
      <h1 className={styles.hero__tittle}>¡ Tu Coworking Favorito !</h1>
    </div>
  );
};

export default Hero;
