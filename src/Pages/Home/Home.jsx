import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MyHero from "./Hero/Hero";
import MySlider from "./Slider/Slider";
import bg1 from "../../assets/images/image5.jpg";
import img1 from "../../assets/images/bg-landing.jpg";
import img2 from "../../assets/images/image9.jpg";
import axios from "axios";
import styles from "./Home.module.css";

function Home() {
  const { isAuthenticated, user, isLoading } = useAuth0();

  const sections = [
    {
      id: 1,
      img: img1,
      tittle: "Coworkings",
      subtittle: "¡Coworkings a tu necesida y gusto!",
      flipped: false,
      color: "one",
    },
    {
      id: 2,
      img: img2,
      tittle: "Cafés",
      subtittle: "¡Cafés de tu agrado!",
      flipped: true,
      color: "two",
    },
  ];

  const userRegis = () => {
    axios({
      method: "post",
      url: "https://backenddig.herokuapp.com/api/users/",
      data: {
        id: user.sub.split("|")[1],
        password: "123",
        is_superuser: false,
        username: user.name,
        email: user.email,
        city: 1,
      },
    }).catch((err) => console.log(err));
  };

  return (
    <div className={styles.my_home}>
      {isLoading
        ? console.log("cargando")
        : isAuthenticated
        ? userRegis()
        : console.log("No Esta logueado")}
      <MyHero className={styles.hero__section} imgSrc={bg1} />
      {sections.map((sec) => (
        <div key={sec.id} className={styles.section__one}>
          <MySlider
            imageSrc={sec.img}
            tittle={sec.tittle}
            subtittle={sec.subtittle}
            flipped={sec.flipped}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
