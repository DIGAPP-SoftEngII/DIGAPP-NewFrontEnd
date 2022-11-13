import React from "react";
import styles from "./Slider.module.css";

function Slider({ imageSrc, tittle, subtittle, flipped }) {
  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <div className={styles.slider__img}>
            <img
              src={imageSrc}
              alt="coworking"
              className={styles.slider__image}
            />
          </div>
          <div className={styles.slider__content}>
            <h1 className={styles.slider__tittle}>{tittle}</h1>
            <p className={styles.slider__subtittle}>{subtittle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.slider__content}>
            <img
              src={imageSrc}
              alt="coworking"
              className={styles.slider__image}
            />
          </div>
          <div className={styles.slider__content}>
            <h1 className={styles.slider__tittle}>{tittle}</h1>
            <p className={styles.slider__subtittle}>{subtittle}</p>
          </div>
        </>
      );
    }
  };

  return <div className="slider">{renderContent()}</div>;
}

export default Slider;
