import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Core
import styles from "./Styles.module.css";
import Stars from "../../../Components/Stars/Stars";
import Loading from "../../../Components/Loading/Loading";
import { getReports } from "../../../Services/Api";

// reactstrap
import { Card, Container } from "reactstrap";
import { useLazyQuery, useQuery } from "@apollo/client";

function CommentBox({ modal, ignored, reportes }) {
  // RenderReports
  const [reports, setReports] = useState([]);
  const { id } = useParams();


  const renderReps = () => {
    
    getReports().then((data) => {
      const reps = [];
      data.map((rep) => {
        if (rep.business_id === parseInt(id)) {
          reps.push(rep);
        }
        return null;
      });
      setReports(reps.reverse());
    });
  };

  useEffect(() => {
    renderReps();
  }, [ignored]);

  useEffect(() => {
    renderReps();
  }, [reports, reportes]);

  return (
    <>
      <main>
        <section className="row justify-content-center mt-5 pb-5">
          <Container className="row justify-content-center mb-5">
            <h1 className={styles.tittle2}> Comentarios de la comunidad </h1>
            <span className="pb-2">
              {" "}
              Este establecimiento tiene {reportes.length} comentarios
            </span>
            <scroll className={styles.scroll__cb}>
              <div className={styles.reps__cg}>
                {reportes ? (
                  reportes.map((rep) => (
                    <Card key={rep.id} className={styles.card}>
                      <span>
                        Usuario: <span>{rep.userid}</span>
                      </span>
                      <span>
                        Calificacion: <span>{rep.scoreestablishment}</span>
                        <Stars state={rep.scoreestablishment} />
                      </span>
                      <span>
                        Internet: <span>{rep.internetquality}</span>
                        <Stars state={rep.internetquality} />
                      </span>
                      {/* <span>
                        Ocupacion: <span>{rep.occupation_status}</span>
                        <Stars state={rep.occupation_status} />
                      </span> */}
                      <span>
                        Comentaro: <p>{rep.review}</p>
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
