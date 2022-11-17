import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../Components/Loading/Loading";
import { FaStar } from "react-icons/fa";
import { TbBrandAirtable } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import {
  MdPhone,
  MdLocationOn,
  MdOutlineMarkunreadMailbox,
  MdArticle,
  MdAccessTime,
  MdAccessTimeFilled,
  MdAccountBalance,
  MdCheck,
  MdNetworkCheck,
  MdOutlinePersonAddAlt,
} from "react-icons/md";
import Stars from "../../Components/Stars/Stars";
import {
  Card,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupText,
  Input,
} from "reactstrap";
import { getEstablishment } from "../../Services/Api";
import { getReports } from "../../Services/Api";
import { setReport } from "../../Services/Api";
import styles from "./Establishment.module.css";

function Establishment() {
  const [reports, setReports] = useState([]);
  const [est, setEst] = useState();
  const [modal, setModal] = useState(false);
  const [rating_business, setRating_business] = useState(0);
  const [internet_status, setInternet_status] = useState(0);
  const [occupation_status, setOccupation_status] = useState("");
  const [comments, setComments] = useState("");
  const { id } = useParams();
  const { isAuthenticated } = useAuth0();

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  const stars = Array(5).fill(0);
  const stars2 = Array(3).fill(0);

  const toggle = () => setModal(!modal);

  const handleChange = (value) => {
    setComments(value);
  };

  const data = {
    rating_business,
    internet_status,
    occupation_status,
    comments,
    report_support: 0,
    business_id: parseInt(id),
    user_id: 3,
  };

  const postReport = () => {
    setReport({ data })
      .then()
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getEstablishment({ id })
      .then((data) => setEst(data))
      .catch((error) => {
        return error.response.data;
      })
      .then((error) => {
        if (error?.detail === "Not found.") {
          console.log(error.detail);
          window.location.href = "/NotFound";
        }
      });

    getReports().then((data) => {
      const reps = [];
      data.map((rep) => {
        if (rep.business_id === parseInt(id)) {
          reps.push(rep);
        }
        return null;
      });
      setReports(reps);
    });
  }, []);

  return (
    <div className={styles.main__container}>
      {est ? (
        <>
          <div className={styles.est__info}>
            <div className={styles.est__container}>
              <img
                alt="est_img"
                src={est.cover_picture}
                className={styles.est__img}
              />
              <h1 className={styles.est__tittle1}>{est.name}</h1>

              <div className={styles.est__cardGroup1}>
                <Card className={styles.est__card1}>
                  <CardTitle className={styles.est__cardTittle}>
                    <MdArticle className={styles.est__icons} />
                    Descripción
                  </CardTitle>
                  <p className={styles.est__cardParagraph}>{est.description}</p>
                </Card>
                <div className={styles.est__cardGroup2}>
                  <Card className={styles.est__card2}>
                    <CardTitle className={styles.est__cardTittle}>
                      <GiKnifeFork className={styles.est__icons} />
                      Menú
                    </CardTitle>
                    <p className={styles.est__cardParagraph}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur sit doloribus voluptatibus! Et eius, officiis, in
                      earum at optio aliquam voluptate consequatur rem iste
                      consectetur cumque similique minus dolores reiciendis
                      accusamus amet placeat tempore veniam. Dignissimos dicta,
                      doloribus magnam suscipit molestiae totam rem quaerat
                      nesciunt! Atque mollitia nam blanditiis amet.
                    </p>
                  </Card>
                  <Card className={styles.est__card2}>
                    <CardTitle className={styles.est__cardTittle}>
                      <MdAccountBalance className={styles.est__icons} />
                      Información
                    </CardTitle>
                    <span className={styles.est__cardParagraph}>
                      <MdLocationOn className={styles.est__icons} />
                      {est.city}
                    </span>
                    <span className={styles.est__cardParagraph}>
                      <MdOutlineMarkunreadMailbox
                        className={styles.est__icons}
                      />
                      {est.address}
                    </span>
                    <span className={styles.est__cardParagraph}>
                      <TbBrandAirtable className={styles.est__icons} />
                      {est.type}
                    </span>
                    <span className={styles.est__cardParagraph}>
                      <MdAccessTime className={styles.est__icons} />
                      {est.Opening}
                    </span>
                    <span className={styles.est__cardParagraph}>
                      <MdAccessTimeFilled className={styles.est__icons} />
                      {est.Closing}
                    </span>
                    <span className={styles.est__cardParagraph}>
                      <MdPhone className={styles.est__icons} />
                      {est.telephone_number}
                    </span>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.est__stats}>
            <Card className={styles.est__ratings__card}>
              <h3 className={styles.est__tittle2}>Estadisticas</h3>
              <div className={styles.est__ratings}>
                <div>
                  <h5 className={styles.est__tittle3}>Calificación</h5>
                  <div className={styles.est__card__items}>
                    <MdCheck size={35} />
                    <div>
                      <Stars state={est.rating} />
                      <p>{est.rating}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className={styles.est__tittle3}>Internet</h5>
                  <div className={styles.est__card__items}>
                    <MdNetworkCheck size={35} />
                    <div>
                      <Stars state={est.internet_quality} />
                      <p>{est.internet_quality}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className={styles.est__tittle3}>Capacidad</h5>
                  <div className={styles.est__card__items}>
                    <MdOutlinePersonAddAlt size={35} />
                    <p>{est.capacity}</p>
                  </div>
                </div>
              </div>
            </Card>
            <h5 className={(styles.est__tittle3, styles.est__final)}>
              Reportes de la comunidad
            </h5>
            {isAuthenticated ? (
              <Button onClick={toggle} className={styles.est__button}>
                Realizar un reporte
              </Button>
            ) : (
              <h5 className={styles.est__tittle3}>
                Registrate para realiar un reporte
              </h5>
            )}

            <Modal
              isOpen={modal}
              toggle={toggle}
              className={styles.est__make__report}
            >
              <ModalHeader toggle={toggle} className={styles.est__tittle3}>
                Dejanos tus opinones
              </ModalHeader>
              <ModalBody>
                <div className={styles.est__card__items}>
                  <MdCheck size={35} />
                  <div>
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={20}
                          color={
                            rating_business > index
                              ? colors.orange
                              : colors.grey
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
                <div className={styles.est__card__items}>
                  <MdNetworkCheck size={35} />
                  <div>
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={20}
                          color={
                            internet_status > index
                              ? colors.orange
                              : colors.grey
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
                <div className={styles.est__card__items}>
                  <MdOutlinePersonAddAlt size={35} />
                  <div>
                    {stars2.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={20}
                          color={
                            occupation_status > index
                              ? colors.orange
                              : colors.grey
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
                  className={styles.est__button}
                  onClick={() => {
                    postReport();
                  }}
                >
                  Enviar reporte
                </Button>
              </ModalFooter>
            </Modal>
            <div className={styles.est__statsCardGroup}>
              {reports ? (
                reports.map((rep) => (
                  <Card key={rep.id} className={styles.est__stastCard}>
                    <span>
                      Usuario: <span>{rep.user_id}</span>
                    </span>
                    <span>
                      Calificacion: <span>{rep.rating_business}</span>
                      <Stars state={rep.rating_business} />
                    </span>
                    <span>
                      Internet: <span>{rep.internet_status}</span>
                      <Stars state={rep.internet_status} />
                    </span>
                    <span>
                      Comentario: <span>{rep.occupation_status}</span>
                      <Stars state={rep.occupation_status} />
                    </span>
                  </Card>
                ))
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Establishment;
