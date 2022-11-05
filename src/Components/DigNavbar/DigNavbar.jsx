import React from "react";
import { Link } from "react-router-dom";
import styles from "./DigNavbar.module.css";

function DigNavbar() {
  return (
    <div className={styles.main__container}>
      <nav className={styles.nav__container}>
        <Link to="/" className={styles.nav__logo}>
          DIGAPP
        </Link>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link to="/establishments" className={styles.nav__link}>
              Establecimientos
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link to="/establishments" className={styles.nav__link}>
              MyName
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link to="/establishments" className={styles.nav__link}>
              Login
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link to="/establishments" className={styles.nav__link}>
              Registo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DigNavbar;
