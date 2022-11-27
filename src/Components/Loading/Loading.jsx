import React from "react";

// Core
import styles from "./Loading.module.css";

// reactstrap
import { Container, Spinner } from "reactstrap";

function Loading() {
  return (
    <>
      <main className={styles.main}>
        <section className="row justify-content-center">
          <Container className="row justify-content-center">
            <Spinner color="dark" />
          </Container>
        </section>
      </main>
    </>
  );
}

export default Loading;
