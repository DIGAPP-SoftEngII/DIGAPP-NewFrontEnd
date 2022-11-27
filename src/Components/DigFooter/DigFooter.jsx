import React from "react";
import { Link } from "react-router-dom";

// Core
import WhiteLogo from "../../assets/img/WhiteLogo.png";
import styles from "./DigFooter.module.css";

// reactstrap
import { Navbar, NavbarBrand, NavItem, NavbarText, Nav } from "reactstrap";

// react-icons
import { FaFacebook, FaInstagram } from "react-icons/fa";

function DigFooter() {
  return (
    <div>
      <Navbar color="dark" className={styles.footer}>
        <div className={styles.footer__container}>
          <NavbarBrand className={styles.footer__brand}>
            <Link color="light" to="/" className={styles.footer__link}>
              <img src={WhiteLogo} className={styles.footer__logo} />
            </Link>
          </NavbarBrand>
          <Nav className={styles.footer__nav}>
            <NavbarText>
              <h1 className={styles.footer__tittle}>Nustras Redes</h1>
            </NavbarText>
            <NavItem className={styles.footer__item}>
              <a
                className={styles.footer__link}
                href="https://web.facebook.com/DIG-APP-105427112229134"
              >
                <FaFacebook color="white" size={30} /> /digapp
              </a>
            </NavItem>
            <NavItem className={styles.footer__item}>
              <a
                className={styles.footer__link}
                href="https://www.instagram.com/dig_app/"
              >
                <FaInstagram color="white" size={30} /> @digapp
              </a>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default DigFooter;
