import React, { useReducer, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Core
import styles from "./Establishment.module.css";
import DigNavbar from "../../Components/DigNavbar/DigNavbar";
import { getEstablishment } from "../../Services/Api";
import Header from "./Sections/Header";
import Information from "./Sections/Information";
import Stats from "./Sections/Stats";

import Loading from "../../Components/Loading/Loading";
import { Container } from "reactstrap";
import DigFooter from "../../Components/DigFooter/DigFooter";

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
            <section className="row justify-content-center">
              <Container className="row justify-content-center">
                <Header est={est} />
              </Container>
            </section>
            <section className="row justify-content-center">
              <Container className="row justify-content-center mb-5">
                <Stats est={est} />
              </Container>
            </section>
            <section className="row justify-content-center">
              <Container className="row justify-content-center">
                <Information
                  forceUpdate={forceUpdate}
                  ignored={ignored}
                  est={est}
                />
              </Container>
            </section>
          </>
        ) : (
          <Loading />
        )}
      </main>
      <DigFooter />
    </>
  );
}

export default Establishment;
