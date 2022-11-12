import React from "react";
import { Link, redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./DigNavbar.module.css";

function DigNavbar() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

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
          <li className={styles.nav__item}></li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/profile" className={styles.nav__link}>
                  {user.given_name}
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link
                  className={styles.nav__link}
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                className={styles.nav__link}
                onClick={() => {
                  loginWithRedirect();
                }}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default DigNavbar;
