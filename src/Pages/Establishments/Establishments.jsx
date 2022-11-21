import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Core
import { getEstablishments } from "../../Services/Api";
import Stars from "../../Components/Stars/Stars";
import Loading from "../../Components/Loading/Loading";
import DigNavbar from "../../Components/DigNavbar/DigNavbar";
import styles from "./Establishments.module.css";

// reactstrap
import { Card, CardBody, Container, Row, Col, Badge, Button } from "reactstrap";

// react-icons
import { MdNetworkCheck, MdCheck } from "react-icons/md";

function Establishments() {
  const [establishments, setEstablishments] = useState();

  useEffect(() => {
    getEstablishments().then((data) => setEstablishments(data));
  }, []);

  return (
    <>
      <DigNavbar />
      <main className={styles.main}>
        <section className="row justify-content-center">
          <Container className="row justify-content-center">
            <Row>
              <Col>
                <h1 className={styles.tittle}>Establecimientos</h1>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="row justify-content-center pb-5">
          <Container className="row justify-content-center mb-5">
            <div className={styles.content}>
              {establishments ? (
                establishments.map((est) => (
                  <Link
                    key={est.id}
                    className={styles.link}
                    to={`/establishment/${est.id}`}
                  >
                    <Card className={styles.card}>
                      <img
                        alt="Sample"
                        src={est.cover_picture}
                        className={styles.card__img}
                      />
                      <CardBody>
                        <cardTitle tag="h5" className={styles.card__title}>
                          {est.name}
                        </cardTitle>
                        <div className={styles.card__subtitle}>
                          <cardSubtitle tag="h6">
                            <h6 className={styles.card__text}>
                              Direccion: {est.address}
                            </h6>
                            <h6 className={styles.card__text}>
                              <div className={styles.card__items}>
                                <MdCheck size={35} />
                                <div>
                                  Calificacion:
                                  <Stars state={est.rating} />
                                </div>
                              </div>
                            </h6>
                            <h6 className={styles.card__text}>
                              <div className={styles.card__items}>
                                <MdNetworkCheck size={35} />
                                <div>
                                  Internet:
                                  <Stars state={est.rating} />
                                </div>
                              </div>
                            </h6>
                          </cardSubtitle>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                ))
              ) : (
                <Loading />
              )}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Establishments;
