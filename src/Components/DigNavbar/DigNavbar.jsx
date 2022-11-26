import React, { useState } from "react";
import { Link } from "react-router-dom";

// Core
import WhiteLogo from "../../assets/img/WhiteLogo.png";
import styles from "./DigNavbar.module.css";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

// reactstrap
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Collapse,
  NavbarToggler,
  NavbarText,
} from "reactstrap";

function DigNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div>
      <Navbar
        dark
        color="dark"
        fixed="top"
        sticky="true"
        className={styles.nav__container}
        expand="md"
      >
        <NavbarBrand>
          <Link color="light" to="/" className={styles.nav__logo}>
            <img src={WhiteLogo} className={styles.dig__logo} />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="me-2" />
        <Collapse Collapse isOpen={isOpen} navbar>
          <Nav className="justify-content-end mt-3 mb-3">
            <NavItem tag={styles.nav__item}>
              <Link to="/establishments" className={styles.nav__link}>
                Establecimientos
              </Link>
            </NavItem>
            <NavItem className={styles.nav__item}>
              {isAuthenticated ? (
                <Nav className="justify-content-end">
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
        </Collapse>
      </Navbar>
    </div>
  );
}

export default DigNavbar;
