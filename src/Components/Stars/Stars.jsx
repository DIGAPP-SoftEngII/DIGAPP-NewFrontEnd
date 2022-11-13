import { FaStar } from "react-icons/fa";
import React from "react";

function Stars({ state }) {
  const stars = Array(5).fill(0);
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };
  return (
    <div>
      {stars.map((_, index) => {
        return (
          <FaStar
            key={index}
            size={20}
            color={state > index ? colors.orange : colors.grey}
          />
        );
      })}
    </div>
  );
}

export default Stars;
