import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEstablishments } from "../../Services/Api";
import { Card, CardBody } from "reactstrap";
import Loading from "../../Components/Loading/Loading";
import styles from "./Establishments.module.css";

function Establishments() {
  const [establishments, setEstablishments] = useState();

  useEffect(() => {
    getEstablishments().then((data) => setEstablishments(data));
  }, []);

  return (
    <div className={styles.main__container}>
      <h2 className={styles.tittle}>Establecimientos</h2>
      <div className={styles.content}>
        {establishments ? (
          establishments.map((est) => (
            <Link
              key={est.id}
              className={styles.link}
              to={`/establishment/${est.id}`}
            >
              <Card className={styles.card}>
                <img alt="Sample" src={est.cover_picture} />
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
                        Calificacion: {est.rating}
                      </h6>
                      <h6 className={styles.card__text}>
                        Internet: {est.internet_quality}
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
    </div>
  );
}

export default Establishments;
