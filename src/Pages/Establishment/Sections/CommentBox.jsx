import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Core
import styles from "./Styles.module.css";
import Stars from "../../../Components/Stars/Stars";
import Loading from "../../../Components/Loading/Loading";
import { getReports } from "../../../Services/Api";

// reactstrap
import { Card, Container } from "reactstrap";

function CommentBox({ modal, ignored }) {
  // RenderReports
  const [reports, setReports] = useState([]);
  const { id } = useParams();

  const resderReps = () => {
    getReports().then((data) => {
      const reps = [];
      data.map((rep) => {
        if (rep.business_id === parseInt(id)) {
          reps.push(rep);
        }
        return null;
      });
      setReports(reps);
    });
  };

  useEffect(() => {
    resderReps();
  }, [ignored]);

  useEffect(() => {
    resderReps();
  }, [reports]);

  return (
    <>
      <main>
        <section className="row justify-content-center mt-5 pb-5">
          <Container className="row justify-content-center mb-5">
            <h1 className={styles.tittle2}> Comentarios de la comunidad</h1>
            <scroll className={styles.scroll__cb}>
              <div className={styles.reps__cg}>
                {reports ? (
                  reports.map((rep) => (
                    <Card key={rep.id} className={styles.card}>
                      <span>
                        Usuario: <span>{rep.user_id}</span>
                      </span>
                      <span>
                        Calificacion: <span>{rep.rating_business}</span>
                        <Stars state={rep.rating_business} />
                      </span>
                      <span>
                        Internet: <span>{rep.internet_status}</span>
                        <Stars state={rep.internet_status} />
                      </span>
                      <span>
                        Ocupacion: <span>{rep.occupation_status}</span>
                        <Stars state={rep.occupation_status} />
                      </span>
                      <span>
                        Comentaro: <p>{rep.comments}</p>
                      </span>
                    </Card>
                  ))
                ) : (
                  <Loading />
                )}
              </div>
            </scroll>
          </Container>
        </section>
      </main>
    </>
  );
}

export default CommentBox;
