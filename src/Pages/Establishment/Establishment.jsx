import React from "react";

//New
import Header from "./Sections/Header";
import Information from "./Sections/Information";
import Stats from "./Sections/Stats";
import Reports from "./Sections/Reports";

//Old
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../Components/Loading/Loading";

import Stars from "../../Components/Stars/Stars";
import { Card } from "reactstrap";
import {
  getEstablishment,
  setLogin,
  getReports,
  setReport,
  getLogin,
} from "../../Services/Api";
import styles from "./Establishment.module.css";
import DigNavbar from "../../Components/DigNavbar/DigNavbar";

function Establishment() {
  const [reports, setReports] = useState([]);
  const [est, setEst] = useState();
  const [modal, setModal] = useState(false);
  const [rating_business, setRating_business] = useState(0);
  const [internet_status, setInternet_status] = useState(0);
  const [occupation_status, setOccupation_status] = useState("");
  const [comments, setComments] = useState("");
  const { id } = useParams();
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [myUser, setMyUser] = useState();

  useEffect(() => {
    getEstablishment({ id }).then((data) => setEst(data));

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
  }, []);

  return (
    <>
      <DigNavbar />
      <main className={styles.main}>
        {est ? (
          <>
            <div className={styles.est__info}>
              <div className={styles.est__container}>
                <Header img={est.cover_picture} tittle={est.name} />
                <Information est={est} />
                <Stats est={est} />
                <Reports />
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
}

export default Establishment;
