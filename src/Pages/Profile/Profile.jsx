import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../Components/Loading/Loading";
import styles from "./Profile.module.css";
import { Container, Card, Row, Col, Button } from "reactstrap";
import DigNavbar from "../../Components/DigNavbar/DigNavbar";

function Profile() {
  const { user, isLoading } = useAuth0();

  return (
    <>
      <DigNavbar />
      <main className={styles.main}>
        {isLoading ? (
          <Loading />
        ) : (
          <section className="section">
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
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <div className="h6 font-weight-300">
                          Mis Establecimientos
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        )}
      </main>
    </>
  );
}

export default Profile;
