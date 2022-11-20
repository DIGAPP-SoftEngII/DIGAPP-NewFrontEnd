import React from "react";

// Core
import styles from "../Profile.module.css";

// reactstrap
import { Container, Row, Col, Card, InputGroup } from "reactstrap";

function PersonalData({ user }) {
  return (
    <>
      <main>
        <section>
          <Container>
            <Card className={styles.card}>
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <div className={styles.user__img}>
                        <img
                          alt="..."
                          className="img-fluid rounded-circle shadow-lg"
                          src={user.picture}
                          style={{ width: "150px" }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-5">
                  <h3>{user.name}</h3>
                  <div className="h6 font-weight-300">
                    Nickname: {user.nickname}
                  </div>
                  <div className="h6 mt-4">{user.email}</div>
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
            </Card>
          </Container>
        </section>
      </main>
    </>
  );
}

export default PersonalData;
