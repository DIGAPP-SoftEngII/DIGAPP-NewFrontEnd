import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Styles.module.css";

// Core
import MenuModal from "./MenuModal";
import InfoModal from "./InfoModal";
import RepsModal from "./RepsModal";
import CommentBox from "./CommentBox";

//reactstrap
import { Container, Button } from "reactstrap";

//react-icons
import { GiKnifeFork } from "react-icons/gi";
import { MdAccountBalance, MdOutlineAdd } from "react-icons/md";

function Information({ forceUpdate, ignored, est }) {
  const { id } = useParams();

  const [menuModal, setMenuModal] = useState(false);
  const menuToggle = () => {
    setMenuModal(!menuModal);
  };
  const [infoModal, setInfoModal] = useState(false);
  const infoToggle = () => {
    setInfoModal(!infoModal);
  };
  const [repsModal, setRepsModal] = useState(false);
  const repsToggle = () => {
    setRepsModal(!repsModal);
  };

  return (
    <>
      <main>
        <section className="row justify-content-center">
          <Container className="row justify-content-center">
            <div className={styles.buttons}>
              <div className={styles.sec__button}>
                <Button className={styles.button} onClick={menuToggle}>
                  <GiKnifeFork className={styles.info__icons} />
                  Menú
                </Button>
                <MenuModal
                  menuModal={menuModal}
                  menuToggle={menuToggle}
                  est={est}
                />
              </div>
              <div className={styles.sec__button}>
                <Button className={styles.button} onClick={infoToggle}>
                  <MdAccountBalance className={styles.info__icons} />
                  Más Información
                </Button>
                <InfoModal
                  infoModal={infoModal}
                  infoToggle={infoToggle}
                  est={est}
                />
              </div>
              <div className={styles.sec__button}>
                <Button className={styles.button} onClick={repsToggle}>
                  Reportar <MdOutlineAdd />
                </Button>
                <RepsModal
                  repsToggle={repsToggle}
                  repsModal={repsModal}
                  id={id}
                  forceUpdate={forceUpdate}
                  ignored={ignored}
                />
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <CommentBox toggle={repsToggle} />
          </Container>
        </section>
      </main>
    </>
  );
}

export default Information;
