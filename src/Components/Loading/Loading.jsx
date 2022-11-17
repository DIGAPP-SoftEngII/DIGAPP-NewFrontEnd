import React from "react";
import { Spinner } from "reactstrap";
import styles from "./Loading.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Loading() {
  return (
    <div className={styles.spinner}>
      <Spinner color="dark" type="grow" />
    </div>
  );
}

export default Loading;
