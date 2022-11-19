import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import WhiteLogo from "../../assets/img/WhiteLogo.png";
import styles from "./DigNavbar.module.css";
import { Container, Row, Col } from "reactstrap";

function DigNavbar() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div>
      <Navbar
        color="black"
        dark="True"
        fixed="top"
        sticky="true"
        className={styles.nav__container}
      >
        <NavbarBrand>
          <Link color="light" to="/" className={styles.nav__logo}>
            <img src={WhiteLogo} className={styles.dig__logo} />
          </Link>
        </NavbarBrand>

        <Nav className={styles.nav__list}>
          <NavItem className={styles.nav__item}>
            <Link to="/establishments" className={styles.nav__link}>
              Establecimientos
            </Link>
          </NavItem>
          <NavItem className={styles.nav__item}>
            {isAuthenticated ? (
              <Nav>
                <NavItem className={styles.nav__item}>
                  <Link to="/profile" className={styles.nav__link}>
                    {user.given_name}
                  </Link>
                </NavItem>
                <NavItem className={styles.nav__item}>
                  <Link
                    className={styles.nav__link}
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </Link>
                </NavItem>
              </Nav>
            ) : (
              <NavItem className={styles.nav__item}>
                <Link
                  className={styles.nav__link}
                  onClick={() => {
                    loginWithRedirect();
                  }}
                >
                  Login
                </Link>
              </NavItem>
            )}
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default DigNavbar;
