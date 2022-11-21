import React from "react";
import { Container } from "reactstrap";
import Stats from "./Stats";
import styles from "./Styles.module.css";

function Header({ est }) {
  return (
    <>
      <main>
        <section className="row justify-content-center">
          <Container className="row justify-content-center">
            <img src={est.cover_picture} className={styles.header__img} />
            <h1 className={styles.header__tittle}>{est.name}</h1>
            <div className={styles.header__desc}>
              <h3>{est.city}</h3>
              <p>{est.description}</p>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Header;
