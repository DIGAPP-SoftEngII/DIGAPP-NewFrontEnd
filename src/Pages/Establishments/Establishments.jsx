import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Core
import { getEstablishments } from "../../Services/Api";
import Stars from "../../Components/Stars/Stars";
import Loading from "../../Components/Loading/Loading";
import DigNavbar from "../../Components/DigNavbar/DigNavbar";
import styles from "./Establishments.module.css";

// reactstrap
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Input,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

// react-icons
import { MdNetworkCheck, MdCheck, MdSearch } from "react-icons/md";
import DigFooter from "../../Components/DigFooter/DigFooter";

function Establishments() {
  const [establishments, setEstablishments] = useState();
  const [estSeaching, setEstSearching] = useState();
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
    filter(e.target.value);
  };

  const filter = (searching) => {
    var resSeaching = establishments.filter((est) => {
      if (est.name.toLowerCase().includes(searching.toLowerCase())) {
        return est;
      }
    });
    setEstSearching(resSeaching);
  };

  useEffect(() => {
    getEstablishments().then((data) => {
      setEstablishments(data);
      setEstSearching(data);
    });
  }, []);

  return (
    <>
      <DigNavbar />
      <main className={styles.main}>
        <section className="row justify-content-center">
          <Container className="row justify-content-center">
            <h1 className={styles.tittle}>Establecimientos</h1>
          </Container>
        </section>
        <section className="row justify-content-center sticky-top">
          <Container className="row justify-content-center mb-5">
            <Input
              className={styles.search}
              onChange={handleChange}
              value={search}
              placeholder="Buscar"
            ></Input>
          </Container>
        </section>
        <section className="row justify-content-center pb-5">
          <Container className="row justify-content-center mb-5">
            <div className={styles.content}>
              {estSeaching ? (
                estSeaching.map((est) => (
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
                        <CardTitle tag="h5" className={styles.card__title}>
                          {est.name}
                        </CardTitle>
                        <div className={styles.card__subtitle}>
                          <CardSubtitle>
                            <h5 className={styles.card__text}>
                              Direccion: {est.address}
                            </h5>
                            <h5 className={styles.card__text}>
                              <div className={styles.card__items}>
                                <MdCheck size={35} />
                                <div>
                                  Calificacion:
                                  <Stars state={est.rating} />
                                </div>
                              </div>
                            </h5>
                            <h5 className={styles.card__text}>
                              <div className={styles.card__items}>
                                <MdNetworkCheck size={35} />
                                <div>
                                  Internet:
                                  <Stars state={est.rating} />
                                </div>
                              </div>
                            </h5>
                          </CardSubtitle>
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
      <DigFooter />
    </>
  );
}

export default Establishments;
