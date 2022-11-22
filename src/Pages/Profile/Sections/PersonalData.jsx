import React from "react";

// Core
import styles from "../Profile.module.css";

// reactstrap
import { Container, Row, Col, Card, InputGroup } from "reactstrap";

function PersonalData({ user }) {
  return (
    <>
      <main>
        <section className="row justif-content-center">
          <Container className="row justif-content-center">
            <div className={styles.profile__header}>
              <div>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={user.picture}
                  style={{ width: "150px" }}
                />
              </div>
              <div className={styles.profile__header__info}>
                <h1 className={styles.profile__header__tittle}>{user.name}</h1>
                <div>Nickname: {user.nickname}</div>
                <div>Email: {user.email}</div>
                <div>
                  Estado del Email:{" "}
                  {user.email_verified ? (
                    <span> Verificado</span>
                  ) : (
                    <span> No Verificado</span>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default PersonalData;
