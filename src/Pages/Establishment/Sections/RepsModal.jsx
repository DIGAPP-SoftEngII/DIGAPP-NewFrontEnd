import React, { useState, useEffect } from "react";

// Core
import styles from "./Styles.module.css";
import { setReport } from "../../../Services/Api";

// reactstrap
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
  InputGroupText,
  Button,
} from "reactstrap";

// react-icons
import { MdCheck, MdNetworkCheck, MdOutlinePersonAddAlt } from "react-icons/md";
import { FaStar } from "react-icons/fa";

function RepsModal({ modal, toggle, myUser, id, forceUpdate, ignored }) {
  // QualyStars
  const stars = Array(5).fill(0);
  const stars2 = Array(3).fill(0);
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  // MakingReport
  const [rating_business, setRating_business] = useState(0);
  const [internet_status, setInternet_status] = useState(0);
  const [occupation_status, setOccupation_status] = useState("");
  const [comments, setComments] = useState("");
  const handleChange = (value) => {
    setComments(value);
  };

  const postReport = () => {
    const data = {
      rating_business,
      internet_status,
      occupation_status,
      comments,
      report_support: 0,
      business_id: parseInt(id),
      user_id: myUser.id,
    };

    setReport({ data })
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <>
      <main>
        <Modal
          isOpen={modal}
          toggle={toggle}
          contentClassName="bg-gradient-danger"
        >
          <ModalHeader toggle={toggle} className={styles.tittle3}>
            Dejanos tus opinones
          </ModalHeader>

          <ModalBody>
            <div className={styles.card__items}>
              <MdCheck size={35} />
              <div>
                {stars.map((_, index) => {
                  return (
                    <FaStar
                      key={index}
                      size={20}
                      color={
                        rating_business > index ? colors.orange : colors.grey
                      }
                      onClick={() => {
                        setRating_business(index + 1);
                      }}
                    />
                  );
                })}
                <h5>Calificacion del lugar</h5>
              </div>
            </div>
            <div className={styles.card__items}>
              <MdNetworkCheck size={35} />
              <div>
                {stars.map((_, index) => {
                  return (
                    <FaStar
                      key={index}
                      size={20}
                      color={
                        internet_status > index ? colors.orange : colors.grey
                      }
                      onClick={() => {
                        setInternet_status(index + 1);
                      }}
                    />
                  );
                })}
                <h5>Calificacion del internet</h5>
              </div>
            </div>
            <div className={styles.card__items}>
              <MdOutlinePersonAddAlt size={35} />
              <div>
                {stars2.map((_, index) => {
                  return (
                    <FaStar
                      key={index}
                      size={20}
                      color={
                        occupation_status > index ? colors.orange : colors.grey
                      }
                      onClick={() => {
                        setOccupation_status(index + 1);
                      }}
                    />
                  );
                })}
                <h5>Que tan lleno esta el lugar</h5>
              </div>
            </div>
            <InputGroup size="sm">
              <InputGroupText>Abc</InputGroupText>
              <Input
                type="textarea"
                className="make__input make__text__area"
                name="comments"
                placeholder="Dejanos tus comentarios"
                onChange={(e) => handleChange(e.target.value)}
              />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              className={styles.button}
              onClick={() => {
                postReport();
                toggle();
                forceUpdate();
              }}
            >
              Enviar reporte
            </Button>
          </ModalFooter>
        </Modal>
      </main>
    </>
  );
}

export default RepsModal;
