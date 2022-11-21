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
            <h2>{est.name}</h2>
          </ModalHeader>
          <ModalBody>
            <h3>
              <GiKnifeFork className={styles.info__icons} /> Menú
            </h3>
            <p className={styles.menuParagraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              sit doloribus voluptatibus! Et eius, officiis, in earum at optio
              aliquam voluptate consequatur rem iste consectetur cumque
              similique minus dolores reiciendis accusamus amet placeat tempore
              veniam. Dignissimos dicta, doloribus magnam suscipit molestiae
              totam rem quaerat nesciunt! Atque mollitia nam blanditiis amet.
            </p>
          </ModalBody>
        </Modal>
      </main>
    </>
  );
}

export default MenuModal;
