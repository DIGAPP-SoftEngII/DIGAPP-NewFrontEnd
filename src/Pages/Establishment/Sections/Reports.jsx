import React, { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

// Core
import styles from "./Styles.module.css";
import RepsModal from "./RepsModal";
import CommentBox from "./CommentBox";

// reactstrap
import { Button } from "reactstrap";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

function Reports({ forceUpdate, ignored }) {
  const { id } = useParams();

  // Auth0
  const { isAuthenticated, isLoading, user } = useAuth0();

  //ModalStates
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

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
          <RepsModal
            toggle={toggle}
            modal={modal}
            id={id}
            forceUpdate={forceUpdate}
            ignored={ignored}
          />
          <CommentBox toggle={modal} />
        </div>
      </main>
    </>
  );
}

export default Reports;
