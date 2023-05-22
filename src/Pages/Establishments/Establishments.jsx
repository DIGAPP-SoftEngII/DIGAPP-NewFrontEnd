import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Core
import { getEstablishments, getFavs } from "../../Services/Api";
import Stars from "../../Components/Stars/Stars";
import Loading from "../../Components/Loading/Loading";
import DigNavbar from "../../Components/DigNavbar/DigNavbar";
import styles from "./Establishments.module.css";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery, gql } from "@apollo/client";

import Cookies from "universal-cookie";

// reactstrap
import {
  Card,
  CardBody,
  Container,
  Input,
  CardTitle,
  CardSubtitle,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

// react-icons
import { MdNetworkCheck, MdCheck } from "react-icons/md";
import DigFooter from "../../Components/DigFooter/DigFooter";

function Establishments() {
  const [fav, setFav] = useState(false);
  const cookies = new Cookies();
  const { isAuthenticated, isLoading } = useAuth0();
  const [favs, setFavs] = useState();
  const [establishments, setEstablishments] = useState();
  const [estSeaching, setEstSearching] = useState();
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
    filter(e.target.value);
  };

  const filter = (searching) => {
    if (fav) {
      var resSeaching = favs.filter((est) => {
        if (est.name.toLowerCase().includes(searching.toLowerCase())) {
          return est;
        }
      });
      setEstSearching(resSeaching);
    } else {
      var resSeaching = establishments.filter((est) => {
        if (est.name.toLowerCase().includes(searching.toLowerCase())) {
          return est;
        }
      });
      setEstSearching(resSeaching);
    }
  };

  const getFavos = async () => {
    const favTemp = [];
    const favsTemp = [];
    await getFavs().then((res) => {
      res.map((data) => {
        if (data.user_id === parseInt(cookies.get("id"))) {
          favTemp.push(data);
        }
      });
    });
    favTemp.map((dataFav) => {
      establishments.map((data) => {
        if (parseInt(dataFav.business_id) === parseInt(data.id)) {
          favsTemp.push(data);
        }
      });
    });
    const temp = new Set(favsTemp);
    const result = [...temp];
    setFavs(result);
    setEstSearching(result);
    console.log(favs);
  };

  const getData = () => {
    if (fav) {
      getFavos();
    } else {
      getEstablishments().then((data) => {
        setEstablishments(data);
        const temp = new Set(data);
        const result = [...temp];
        setEstSearching(result);
      });
    }
  };



  const allEstCard = gql`
    query{
      allEstablishments {
        establishmentName
        id
        location
        userID
        coverPicture
          Statistics {
            IQAverage
            SEAverage
          }
      }
    }
  `

  const {data, error, loading} = useQuery(allEstCard)



  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <DigNavbar />
      <main className={styles.main}>
        <section className="row justify-content-center">
          <Container className="row justify-content-center mt-5">
            <Nav className={styles.nav__search}>
              <NavItem className={styles.search__item}>
                <Button
                  onClick={() => {
                    setFav(false);
                    getData();
                  }}
                  className={styles.button}
                >
                  Todos
                </Button>
              </NavItem>
              {isLoading ? (
                console.log("LoadingUser...")
              ) : isAuthenticated ? (
                <NavItem className={styles.search__item}>
                  <Button
                    onClick={() => {
                      getData();
                      setFav(true);
                    }}
                    className={styles.button}
                  >
                    Favoritos
                  </Button>
                </NavItem>
              ) : (
                console.log("NothingIsAuthenticated")
              )}
              <NavItem className={styles.search__item}>
                <Input
                  className={styles.search}
                  onChange={handleChange}
                  value={search}
                  placeholder="Buscar"
                />
              </NavItem>
            </Nav>
          </Container>
        </section>
        <section className="row justify-content-cente">
          <Container className="row justify-content-center">
            <h1 className={styles.tittle}>Establecimientos</h1>
          </Container>
        </section>
        <section className="row justify-content-center pb-5">
          <Container className="row justify-content-center mb-5">
            <div className={styles.content}>
              {!loading ? (
                data.allEstablishments.map((est) => (
                  <Link
                    key={est.id}
                    className={styles.link}
                    to={`/establishment/${est.id}`}
                  >
                    <Card className={styles.card}>
                      <img
                        alt="Sample"
                        src={est.coverPicture}
                        className={styles.card__img}
                      />
                      <CardBody>
                        <CardTitle tag="h5" className={styles.card__title}>
                          {est.name}
                        </CardTitle>
                        <div className={styles.card__subtitle}>
                          <CardSubtitle>
                            <h5 className={styles.card__text}>
                              Direccion: {est.location}
                            </h5>
                            <h5 className={styles.card__text}>
                              <div className={styles.card__items}>
                                <MdCheck size={35} />
                                <div>
                                  Calificacion:
                                  <Stars state={est.Statistics.SEAverage} />
                                </div>
                              </div>
                            </h5>
                            <h5 className={styles.card__text}>
                              <div className={styles.card__items}>
                                <MdNetworkCheck size={35} />
                                <div>
                                  Internet:
                                  <Stars state={est.Statistics.IQAverage} />
                                </div>
                              </div>
                            </h5>
                          </CardSubtitle>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                ))
              ) : (
                <Loading />
              )}
            </div>
          </Container>
        </section>
      </main>
      <DigFooter />
    </>
  );
}

export default Establishments;
