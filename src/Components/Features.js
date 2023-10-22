import React from "react";
import "./Features.css";

function Features(props) {
  return (
    <div
      className="container"
      style={{ flexDirection: `${props.flexDirection}` }}
    >
      <div className="row">
        <h2>{props.h2}</h2>
        <h3>{props.h3}</h3>
      </div>

      <div className="img-bx">
        <img src={`/images/feature-${props.imgNum}.png`} alt="features" />
      </div>
    </div>
  );
}

export default Features;
