import React from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Loading() {
  return (
    <div>
      <Spinner color="dark" />
    </div>
  );
}

export default Loading;
