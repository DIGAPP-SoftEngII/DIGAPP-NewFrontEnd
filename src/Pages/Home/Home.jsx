import React from "react";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getLogin } from "../../Services/Api";
import bg1 from "../../assets/images/image5.jpg";
import img1 from "../../assets/images/bg-landing.jpg";
import img2 from "../../assets/images/image9.jpg";
import axios from "axios";
import styles from "./Home.module.css";

function Home() {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [userTemp, setUserTemp] = useState();

  useEffect(() => {
    isLoading
      ? console.log("cargando...")
      : isAuthenticated
      ? console.log("Hay que hacer algo aca")
      : console.log("No hay usuario logueado");
  }, [isLoading]);

  const getUser = () => {
    axios.get("https://backenddig.herokuapp.com/api/users/1/login", {
      params: { id: user.sub.split("|")[1] },
    });
  };

  const setUser = () => {
    axios
      .post("https://backenddig.herokuapp.com/api/users/")
      .then((res) => console.log(res));
  };

  return (
    <div className={styles.my__home}>
      {console.log(userTemp)}
      <div className={styles.landing}>
        <img src={bg1} className={styles.home__landing__img} />
      </div>
    </div>
  );
}

export default Home;
