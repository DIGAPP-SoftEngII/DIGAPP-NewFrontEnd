import React, { useEffect, useState } from "react";

// Core
import styles from "./Styles.module.css";
import { getEstablishments, deleteEstablishment } from "../../../Services/Api";
import Loading from "../../../Components/Loading/Loading";
import Stars from "../../../Components/Stars/Stars";

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
            <section
              key={est.bussiness_id}
              className="row justify-content-center mt-3"
            >
              <Container className="row justify-content-center">
                <div className={styles.row}>
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
                          <Stars state={est.rating} />
                          <CardText>Internet: {est.internet_quality}</CardText>
                          <Stars state={est.rating} />
                        </CardBody>
                      </div>
                    </Card>
                  </Link>
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
