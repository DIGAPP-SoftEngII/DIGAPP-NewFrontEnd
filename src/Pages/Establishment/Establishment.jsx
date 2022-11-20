import React, { useReducer, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Core
import styles from "./Establishment.module.css";
import DigNavbar from "../../Components/DigNavbar/DigNavbar";
import { getEstablishment } from "../../Services/Api";
import Header from "./Sections/Header";
import Information from "./Sections/Information";
import Stats from "./Sections/Stats";
import Reports from "./Sections/Reports";
import Loading from "../../Components/Loading/Loading";

function Establishment() {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [est, setEst] = useState();
  const { id } = useParams();

  useEffect(() => {
    getEstablishment({ id }).then((data) => setEst(data));
  }, [ignored]);

  useEffect(() => {
    getEstablishment({ id }).then((data) => setEst(data));
  }, [est]);

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
                <Reports forceUpdate={forceUpdate} ignored={ignored} />
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
