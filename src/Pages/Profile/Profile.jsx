import React, { useState } from "react";

// Core
import styles from "./Profile.module.css";
import Loading from "../../Components/Loading/Loading";
import DigNavbar from "../../Components/DigNavbar/DigNavbar";
import { uploadFile } from "../../Services/firebase";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

// reactstrap
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";

// react-icons
import { MdOutlineAdd } from "react-icons/md";
import CEModal from "./Sections/CEModal";
import PersonalData from "./Sections/PersonalData";
import UserEsts from "./Sections/UserEsts";
import DigFooter from "../../Components/DigFooter/DigFooter";

function Profile() {
  //MakingAnEstablishment
  const [file, setFile] = useState(null);

  // ModalStates
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  // Auth0
  const { user, isLoading } = useAuth0();

  return (
    <>
      <DigNavbar />
      <main className={styles.main}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <PersonalData user={user} />
            <section>
              <Container>
                <h1>Mis Establecimientos</h1>
                <Button onClick={toggle}>
                  Crear <MdOutlineAdd />{" "}
                </Button>
                <CEModal toggle={toggle} modal={modal} />
              </Container>
            </section>
            <UserEsts />
          </>
        )}
      </main>
      <DigFooter />
    </>
  );
}
export default Profile;
