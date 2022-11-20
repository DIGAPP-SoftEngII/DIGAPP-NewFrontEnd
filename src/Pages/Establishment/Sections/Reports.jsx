import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Core
import styles from "./Styles.module.css";
import RepsModal from "./RepsModal";
import CommentBox from "./CommentBox";
import { getLogin, setLogin } from "../../../Services/Api";

// reactstrap
import { Button } from "reactstrap";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

function Reports() {
  const { id } = useParams();

  // Auth0
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [myUser, setMyUser] = useState();

  //ModalStates
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  // Verify User on Our DB
  const verifyUser = () => {
    isLoading
      ? console.log("LoadingUser...")
      : isAuthenticated
      ? getLogin(user.sub.split("|")[1]).then((res) => {
          if (res != 0) {
            setMyUser(res[0]);
          } else {
            setLogin({
              password: "1234567ABC",
              username: String(user.name),
              email: String(user.email),
              auth0_id: String(user.sub.split("|")[1]),
            }).then((res) => {
              setMyUser(res);
            });
          }
        })
      : console.log("NothingAuth");
  };

  // UseEffect
  useEffect(() => {
    // Render Reports
  }, []);

  useEffect(() => {
    verifyUser();
  }, [isLoading]);

  return (
    <>
      <main>
        <div className={styles.reps}>
          <h5 className={styles.tittle2}>Reportes de la comunidad</h5>
          {isAuthenticated ? (
            <Button
              onClick={() => {
                toggle();
              }}
              className={styles.button}
            >
              Realizar un reporte
            </Button>
          ) : (
            <h5 className={styles.tittle3}>
              Registrate para realiar un reporte
            </h5>
          )}
          <RepsModal toggle={toggle} modal={modal} myUser={myUser} id={id} />
          <CommentBox toggle={modal} />
        </div>
      </main>
    </>
  );
}

export default Reports;
