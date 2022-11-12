import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardGroup, CardTitle } from "reactstrap";
import Loading from "../../Components/Loading/Loading";
import { TbBrandAirtable } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import {
  MdPhone,
  MdLocationOn,
  MdOutlineMarkunreadMailbox,
  MdMenuBook,
  MdArticle,
  MdAccessTime,
  MdAccessTimeFilled,
  MdAccountBalance,
} from "react-icons/md";
import { getEstablishment } from "../../Services/Api";
import { getReports } from "../../Services/Api";
import styles from "./Establishment.module.css";

function Establishment() {
  const [reports, setReports] = useState([]);
  const [est, setEst] = useState();
  const { id } = useParams();

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
      <div className={styles.est__info}>
        {est ? (
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
                    <MdOutlineMarkunreadMailbox className={styles.est__icons} />
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
        ) : (
          <Loading />
        )}
      </div>
      <div className={styles.est__stats}>
        <h3 className={styles.est__tittle2}>Estadisticas</h3>
        <div className={styles.est__statsCardGroup}>
          {reports ? (
            reports.map((rep) => (
              <Card key={rep.id} className={styles.est__stastCard}>
                <span>
                  Usuario: <span>{rep.user_id}</span>
                </span>
                <span>
                  Calificacion: <span>{rep.rating_business}</span>
                </span>
                <span>
                  Internet: <span>{rep.internet_status}</span>
                </span>
                <span>
                  Comentario: <span>{rep.occupation_status}</span>
                </span>
              </Card>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default Establishment;
