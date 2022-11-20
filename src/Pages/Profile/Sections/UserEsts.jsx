import React, { useEffect, useState } from "react";

// Core
import styles from "./Styles.module.css";
import { getEstablishments, deleteEstablishment } from "../../../Services/Api";
import Loading from "../../../Components/Loading/Loading";

// Universal Cookies
import Cookies from "universal-cookie";

// reactstrap
import {
  Container,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

// react-icons
import { FaTrash } from "react-icons/fa";
import { MdOutlineRefresh } from "react-icons/md";

function UserEsts() {
  const [ests, setEsts] = useState();
  const cookies = new Cookies();

  useEffect(() => {
    getEstablishments().then((res) => {
      const buss = [];
      res.map((any) => {
        if (any.user_id === parseInt(cookies.get("id"))) {
          buss.push(any);
        }
        return null;
      });
      setEsts(buss);
    });
  }, []);

  return (
    <>
      <main>
        {ests ? (
          ests.map((est) => (
            <section key={est.bussiness_id} id="card_id">
              <Container>
                <div className={styles.row}>
                  <div>
                    <Link className={styles.link}>
                      <Card className={styles.card}>
                        <div>
                          <img
                            alt="Card cap"
                            src={est.cover_picture}
                            width="100%"
                          />
                        </div>
                        <div>
                          <CardBody>
                            <CardTitle tag="h5">{est.name}</CardTitle>
                            <CardText>Calificacion: {est.rating}</CardText>
                            <CardText>
                              Internet: {est.internet_quality}
                            </CardText>
                          </CardBody>
                        </div>
                      </Card>
                    </Link>
                  </div>
                  <div className={styles.row__udpt}>
                    <div>
                      <Button className={styles.button2}>
                        <MdOutlineRefresh
                          className={styles.delete__icon}
                          size={25}
                        />
                      </Button>
                    </div>
                    <div>
                      <Button
                        className={styles.button2}
                        onClick={() => {
                          console.log(document.getElementById("card_id"));
                          deleteEstablishment(est.bussiness_id);
                        }}
                      >
                        <FaTrash className={styles.delete__icon} size={25} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          ))
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
}

export default UserEsts;
