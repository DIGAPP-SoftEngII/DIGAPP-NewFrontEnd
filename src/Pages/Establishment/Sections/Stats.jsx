import React from "react";
import styles from "../Sections/Styles.module.css";

//Core
import Stars from "../../../Components/Stars/Stars";

//reactstrap
import { Card, Container } from "reactstrap";

//react-icons
import { MdCheck, MdNetworkCheck, MdOutlinePersonAddAlt } from "react-icons/md";

function Stats({ est }) {
  return (
    <>
      <main>
        <section className="row justify-content-center mt-5">
          <Container className="row justify-content-center">
            <hr className={styles.divider} />
          </Container>
        </section>
        <section className="row justify-content-center mt-5">
          <Container className="row justify-content-center">
            <Card className={styles.card}>
              <div className={styles.stats__ratings}>
                <div>
                  <h5 className={styles.tittle3}>Calificación</h5>
                  <div className={styles.card__items}>
                    <MdCheck size={35} />
                    <div>
                      <Stars state={est.rating} />
                      <p>{est.rating}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className={styles.tittle3}>Internet</h5>
                  <div className={styles.card__items}>
                    <MdNetworkCheck size={35} />
                    <div>
                      <Stars state={est.internet_quality} />
                      <p>{est.internet_quality}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className={styles.tittle3}>Capacidad</h5>
                  <div className={styles.card__items}>
                    <MdOutlinePersonAddAlt size={35} />
                    <p>{est.capacity}</p>
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

export default Stats;
