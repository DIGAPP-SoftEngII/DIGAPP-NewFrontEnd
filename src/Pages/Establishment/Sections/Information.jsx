import React from "react";
import styles from "./Styles.module.css";

//reactstrap
import { Card, CardTitle } from "reactstrap";

//react-icons
import { GiKnifeFork } from "react-icons/gi";
import { TbBrandAirtable } from "react-icons/tb";
import {
  MdPhone,
  MdLocationOn,
  MdOutlineMarkunreadMailbox,
  MdAccessTime,
  MdAccessTimeFilled,
  MdAccountBalance,
  MdArticle,
} from "react-icons/md";

function Information({ est }) {
  return (
    <>
      <main>
        <div className={styles.info__cg1}>
          <Card className={styles.info__card1}>
            <CardTitle className={styles.info__cardTittle}>
              <MdArticle className={styles.info__icons} />
              Descripción
            </CardTitle>
            <p className={styles.info__cardParagraph}>{est.description}</p>
          </Card>
          <div className={styles.info__cg2}>
            <Card className={styles.info__card2}>
              <CardTitle className={styles.info__cardTittle}>
                <GiKnifeFork className={styles.info__icons} />
                Menú
              </CardTitle>
              <p className={styles.info__cardParagraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                sit doloribus voluptatibus! Et eius, officiis, in earum at optio
                aliquam voluptate consequatur rem iste consectetur cumque
                similique minus dolores reiciendis accusamus amet placeat
                tempore veniam. Dignissimos dicta, doloribus magnam suscipit
                molestiae totam rem quaerat nesciunt! Atque mollitia nam
                blanditiis amet.
              </p>
            </Card>
            <Card className={styles.info__card2}>
              <CardTitle className={styles.info__cardTittle}>
                <MdAccountBalance className={styles.info__icons} />
                Información
              </CardTitle>
              <span className={styles.info__cardParagraph}>
                <MdLocationOn className={styles.info__icons} />
                {est.city}
              </span>
              <span className={styles.info__cardParagraph}>
                <MdOutlineMarkunreadMailbox className={styles.info__icons} />
                {est.address}
              </span>
              <span className={styles.info__cardParagraph}>
                <TbBrandAirtable className={styles.info__icons} />
                {est.type}
              </span>
              <span className={styles.info__cardParagraph}>
                <MdAccessTime className={styles.info__icons} />
                {est.Opening}
              </span>
              <span className={styles.info__cardParagraph}>
                <MdAccessTimeFilled className={styles.info__icons} />
                {est.Closing}
              </span>
              <span className={styles.info__cardParagraph}>
                <MdPhone className={styles.info__icons} />
                {est.telephone_number}
              </span>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}

export default Information;
