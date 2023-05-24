import React from "react";

// Core
import styles from "./Styles.module.css";

// reactstrap
import { Modal, ModalBody, ModalHeader } from "reactstrap";

// react-icons
import { GiKnifeFork } from "react-icons/gi";

function MenuModal({ menuModal, menuToggle, est }) {
  return (
    <>
      <main>
        <Modal
          isOpen={menuModal}
          toggle={menuToggle}
          contentClassName="bg-gradient-danger"
        >
          <ModalHeader toggle={menuToggle}>
            <h2>{est.establishmentName}</h2>
          </ModalHeader>
          <ModalBody>
            <h3>
              <GiKnifeFork className={styles.info__icons} /> Menú
            </h3>
            <p className={styles.menuParagraph}>
              {est.menu}
            </p>
          </ModalBody>
        </Modal>
      </main>
    </>
  );
}

export default MenuModal;
