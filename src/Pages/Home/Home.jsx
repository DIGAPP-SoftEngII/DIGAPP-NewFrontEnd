import React, { useEffect } from "react";
import BlackLogo from "../../assets/img/BlackLogo.svg";
import img2 from "../../assets/img/image9.jpg";
import img1 from "../../assets/img/ramita.svg";
import styles from "./Home.module.css";
import { Container, Row, Col, Card, Badge, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import DigNavbar from "../../Components/DigNavbar/DigNavbar";
import { getLogin, setLogin } from "../../Services/Api";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from "universal-cookie";

function Home() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const cookies = new Cookies();

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

  useEffect(() => {
    verifyUser();
  }, [isLoading]);

  return (
    <>
      <DigNavbar />
      <main className={styles.main}>
        <section className="section section-lg pt-0">
          <Container className="fluid">
            <div className={styles.main__logo}>
              <img src={BlackLogo} />
            </div>
            <hr />
          </Container>
        </section>
        <section className="section section-lg pt-0">
          <Container className="fluid">
            <div className={styles.hero1}>
              <Row>
                <Col xs="3">
                  <img src={img1} className={styles.hero1__img} />
                </Col>
                <Col xs="6">
                  <p className={styles.hero__text}>
                    <span className={styles.hero__text1}>Encuentra</span> el
                    lugar que buscas con actualizaciones en{" "}
                    <span className={styles.hero__text2}>tiempo real</span>
                    {"  "}
                    <FaRegClock />
                  </p>
                </Col>
                <Col xs="3">
                  <img src={img1} className={styles.hero1__img} />
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <div className={styles.space} />
        <div className={styles.space} />
        <div className={styles.space} />
        <section className="section section-lg pt-0">
          <Container>
            <Card className={styles.card}>
              <div className="p-5">
                <Row className="align-items-center">
                  <Col lg="8">
                    <h3 className="text-black">
                      CAFÉS Y COWORKINGS A TU GUSTO !
                    </h3>
                    <p className="lead text-black mt-3">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers. I
                      understand culture.
                    </p>
                  </Col>
                  <Col className="ml-lg-auto" lg="3">
                    <Link className={styles.btn} to="/establishments">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        size="md"
                      >
                        Ver Establecimientos
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Card>
          </Container>
        </section>
        <div className={styles.space}></div>
        <section className="section pb-0 bg-gradient-warning">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-lg-2 ml-lg-auto" md="6">
                <div className="position-relative pl-md-5">
                  <img alt="..." className="img-center img-fluid" src={img2} />
                </div>
              </Col>
              <Col className="order-lg-1" lg="6">
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-building text-primary" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <img src={BlackLogo} />
                    <p className="text-white">
                      Una aplicación donde encontraras los mejores cafés y
                      coworkings que se acomoden a tu gusto.
                    </p>
                  </div>
                </div>
                <Card className="shadow shadow-lg--hover mt-5">
                  <CardBody>
                    <div className="d-flex px-3">
                      <div>
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-satisfied" />
                        </div>
                      </div>
                      <div className="pl-4">
                        <h5 className="title text-success">Awesome Support</h5>
                        <p>
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever.
                        </p>
                        <a
                          className="text-success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="shadow shadow-lg--hover mt-5">
                  <CardBody>
                    <div className="d-flex px-3">
                      <div>
                        <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                          <i className="ni ni-active-40" />
                        </div>
                      </div>
                      <div className="pl-4">
                        <h5 className="title text-warning">
                          Modular Components
                        </h5>
                        <p>
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever.
                        </p>
                        <a
                          className="text-warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            ></svg>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
