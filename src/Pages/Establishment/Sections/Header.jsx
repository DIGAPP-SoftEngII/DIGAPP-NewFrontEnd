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
            {console.log(est.coverPicture)}
            <img src={est.coverPicture} className={styles.header__img} />
            <h1 className={styles.header__tittle}>{est.establishmentName}</h1>
            <div className={styles.header__desc}>
              <h3>{est.city === 1 ? "Bogotá" : "Medellin"}</h3>
              <span>{est.location}</span>
              <p>{est.description}</p>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Header;
