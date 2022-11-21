import React, { useEffect } from "react";

// Core
import BlackLogo from "../../assets/img/BlackLogo.svg";
import img1 from "../../assets/img/ramita.svg";
import img2 from "../../assets/img/image7.jpg";
import DigNavbar from "../../Components/DigNavbar/DigNavbar";
import { getLogin, setLogin } from "../../Services/Api";
import styles from "./Home.module.css";

// reactstrap
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";

// cookies
import Cookies from "universal-cookie";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

// react-icons
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { TbBrandAirtable } from "react-icons/tb";

function Home() {
  // Auth0
  const { isAuthenticated, isLoading, user } = useAuth0();
  // universal cookies
  const cookies = new Cookies();

  // Delete cookies
  const deleteCookies = () => {
    cookies.remove("id", { path: "/" });
    console.log("Anyone is logued");
  };

  // Verify User on Our DB
  const verifyUser = () => {
    isLoading
      ? console.log("LoadingUser...")
      : isAuthenticated
      ? getLogin(user.sub.split("|")[1]).then((res) => {
          if (res != 0) {
            cookies.set("id", res[0].id, { path: "/" });
          } else {
            setLogin({
              password: "1234567ABC",
              username: String(user.name),
              email: String(user.email),
              auth0_id: String(user.sub.split("|")[1]),
            }).then((res) => {
              cookies.set("id", res[0].id, { path: "/" });
            });
          }
        })
      : deleteCookies();
  };

  // Efects
  useEffect(() => {
    verifyUser();
  }, [isLoading]);

  return (
    <>
      <DigNavbar />
      <main className={styles.main}>
        <section className="row justify-content-center">
          <Container className="row justify-content-center">
            <div className={styles.main__logo}>
              <img
                alt="img1"
                src={BlackLogo}
                className={styles.main__logo__img}
              />
            </div>
          </Container>
        </section>
        <section className="row justify-content-center mb-5">
          <Container className="row justify-content-center mb-5">
            <div className={styles.hero1}>
              <Row>
                <Col xs="3">
                  <img alt="img2" src={img1} className={styles.hero1__img} />
                </Col>
                <Col xs="6">
                  <p className={styles.hero__text}>
                    <span className={styles.hero__text1}>Encuentra</span> el
                    lugar ideal para trabajar, con actualizaciones en{" "}
                    <span className={styles.hero__text2}>tiempo real</span>
                    {"  "}
                    <FaRegClock />
                  </p>
                </Col>
                <Col xs="3">
                  <img alt="img3" src={img1} className={styles.hero1__img} />
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section className="row justify-content-center mt-5">
          <Container className="row justify-content-center mt-5">
            <hr className={styles.divider} />
          </Container>
        </section>
        <section className="row jusrify-content-center">
          <Container clasname="row jusrify-content-center">
            <div className={styles.section2}>
              <div>
                <FiCoffee size={60} className={styles.section2__icons} />
                <h5>Cafés</h5>
              </div>
              <div>
                <TbBrandAirtable size={60} className={styles.section2__icons} />
                <h5>Coworkings</h5>
              </div>
            </div>
          </Container>
        </section>
        <section className="row justify-content-center ">
          <Container className="row justify-content-center">
            <Card className={styles.card__section4} height="200">
              <CardImg
                alt="Card image cap2"
                src="https://firebasestorage.googleapis.com/v0/b/digapp-b8984.appspot.com/o/72de1097-a93b-4a7d-86c1-5e89815c2ac0?alt=media&token=2052f8de-73e8-432f-97d6-6b450750cfdd"
                className={styles.section4__img}
              />
              <CardImgOverlay>
                <CardTitle tag="h5" className={styles.section4__text}>
                  ¡ Explora nuestros espacios !
                </CardTitle>
                <CardText className={styles.section4__text}>
                  De seguro encuentras algo a tu gusto.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Container>
        </section>
        <section className="row justify-content-center pb-5 mt-5">
          <Container className="row justify-content-center mb-5 mt-5">
            <Card className={styles.card__section4} height="200">
              <CardImg
                alt="Card image cap1"
                src="https://firebasestorage.googleapis.com/v0/b/digapp-b8984.appspot.com/o/image5.jpg?alt=media&token=5536b72b-6237-46b9-bb83-f4ad70ddde90"
                className={styles.section4__img}
              />
              <CardImgOverlay className={styles.overlay}>
                <CardTitle tag="h5" className={styles.section4__text}>
                  ¡ Explora nuestros espacios !
                </CardTitle>
                <CardText className={styles.section4__text}>
                  De seguro encuentras algo a tu gusto.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Home;
