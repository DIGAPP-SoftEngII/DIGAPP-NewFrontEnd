import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEstablishments } from "../../Services/Api";
import { MdNetworkCheck, MdCheck } from "react-icons/md";
import Stars from "../../Components/Stars/Stars";
import Loading from "../../Components/Loading/Loading";
import styles from "./Establishments.module.css";
import DigNavbar from "../../Components/DigNavbar/DigNavbar";
import { Card, CardBody, Container, Row, Col, Badge, Button } from "reactstrap";

function Establishments() {
  const [establishments, setEstablishments] = useState();

  useEffect(() => {
    getEstablishments().then((data) => setEstablishments(data));
  }, []);

  return (
    <>
      <DigNavbar />
      <main className={styles.main__container}>
        <section>
          <Container>
            <Row>
              <Col>
                <h1 className={styles.tittle}>Establecimientos</h1>
              </Col>
            </Row>
          </Container>
          <div className={styles.section1}></div>
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
                      <cardText></cardText>
                    </CardBody>
                  </Card>
                </Link>
              ))
            ) : (
              <Loading />
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Establishments;
