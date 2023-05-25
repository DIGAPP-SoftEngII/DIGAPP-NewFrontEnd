import React, { useReducer, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Core
import styles from "./Establishment.module.css";
import DigNavbar from "../../Components/DigNavbar/DigNavbar";
import Header from "./Sections/Header";
import Information from "./Sections/Information";
import Stats from "./Sections/Stats";

import Loading from "../../Components/Loading/Loading";
import { Container } from "reactstrap";
import DigFooter from "../../Components/DigFooter/DigFooter";

import { useQuery, gql} from "@apollo/client";

export const queryEstablishment = gql`
  query($establishmentId: String!){
    findEstablishment(EstablishmentID: $establishmentId){
      id
      establishmentName
      establishmentType
      opening
      closing
      description
      capacity
      city
      location
      userID
      coverPicture
      menu
      Statistics {
        IQAverage
        SEAverage
      }
      Reports {
        userid
        scoreestablishment
        internetquality
        review
      }
    }
  }
`





function Establishment() {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [est, setEst] = useState();
  const { id } = useParams();

  useEffect(() => {
    //getEstablishment({ id }).then((data) => setEst(data));
  }, [ignored]);
  



const {data, error, loading} = useQuery(queryEstablishment, {
  variables: {establishmentId: id}
})

useEffect(() => {
  if(!loading){
    setEst(data.findEstablishment)
  }
}, [data]);

  return (
    <>
      <DigNavbar />
      <main className={styles.main}>
        { est != undefined ? (          
          <>
            <section className="row justify-content-center">
              <Container className="row justify-content-center">
                <Header est={est} />
              </Container>
            </section>
            <section className="row justify-content-center">
              <Container className="row justify-content-center mb-5">
                <Stats stats={est.Statistics} capacity={est.capacity} />
              </Container>
            </section>
            <section className="row justify-content-center">
              <Container className="row justify-content-center">
                <Information
                  forceUpdate={forceUpdate}
                  ignored={ignored}
                  est={est}
                />
              </Container>
            </section>
          </>
        ) : (
          <Loading />
        )}
      </main>
      <DigFooter />
    </>
  );
}

export default Establishment;
