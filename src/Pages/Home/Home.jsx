import React, { useEffect } from "react";

// Core
import BlackLogo from "../../assets/img/BlackLogo.svg";
import img1 from "../../assets/img/ramita.svg";
import DigNavbar from "../../Components/DigNavbar/DigNavbar";
import { getLogin, setLogin } from "../../Services/Api";
import styles from "./Home.module.css";
import DigFooter from "../../Components/DigFooter/DigFooter";

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
  UncontrolledCarousel,
} from "reactstrap";

// cookies
import Cookies from "universal-cookie";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

//react-icons
import { FaRegClock } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { TbBrandAirtable } from "react-icons/tb";

function Home() {
  // Sliders

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
  useEffect(() => {
    isLoading
      ? console.log("LoadingUser...")
      : isAuthenticated
      ? getLogin(user.sub.split("|")[1]).then((res) => {
          if (res.length !== 0) {
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
        <section className="row justify-content-center pb-5 mt-5">
          <Container className="row justify-content-center mb-5 mt-5">
            <UncontrolledCarousel
              className={styles.section4__img}
              items={[
                {
                  altText: "Slide 1",
                  caption: "Cafés",
                  key: 1,
                  src: "https://firebasestorage.googleapis.com/v0/b/digapp-b8984.appspot.com/o/image4.jpg?alt=media&token=94494680-2128-4e3b-af56-4bce6a172d3d",
                },
                {
                  altText: "Slide 2",
                  caption: "Coworkings",
                  key: 2,
                  src: "https://firebasestorage.googleapis.com/v0/b/digapp-b8984.appspot.com/o/image5.jpg?alt=media&token=5536b72b-6237-46b9-bb83-f4ad70ddde90",
                },
              ]}
            />
          </Container>
        </section>
      </main>
      <DigFooter />
    </>
  );
}

export default Home;
