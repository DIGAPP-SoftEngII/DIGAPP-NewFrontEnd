import React from "react";

// Core
import styles from "./Styles.module.css";

// reactstrap
import { Modal, ModalBody, ModalHeader } from "reactstrap";

// react-icons
import {
  MdAccountBalance,
  MdLocationOn,
  MdOutlineMarkunreadMailbox,
  MdAccessTime,
  MdAccessTimeFilled,
} from "react-icons/md";
import { TbBrandAirtable } from "react-icons/tb";

function InfoModal({ infoModal, infoToggle, est }) {
  return (
    <>
      <main>
        <Modal isOpen={infoModal} toggle={infoToggle}>
          <ModalHeader toggle={infoToggle}>
            <h2>{est.establishmentName}</h2>
          </ModalHeader>
          <ModalBody>
            <h3>
              <MdAccountBalance className={styles.info__icons} /> Información
            </h3>
            <p className={styles.info__cardParagraph}>
              <MdLocationOn className={styles.info__icons} />
              Ciudad: {est.city}
            </p>
            <p className={styles.info__cardParagraph}>
              <MdOutlineMarkunreadMailbox className={styles.info__icons} />
              Dirección: {est.location}
            </p>
            <p className={styles.info__cardParagraph}>
              <TbBrandAirtable className={styles.info__icons} />
              Tipo de Establecimiento: {est.establishmentType}
            </p>
            <p className={styles.info__cardParagraph}>
              <MdAccessTime className={styles.info__icons} />
              Hora apertura: {est.opening}
            </p>
            <p className={styles.info__cardParagraph}>
              <MdAccessTimeFilled className={styles.info__icons} />
              Hora de Cierre: {est.closing}
            </p>
          </ModalBody>
        </Modal>
      </main>
    </>
  );
}

export default InfoModal;
