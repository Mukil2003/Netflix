import React from "react";

function Btnred(props) {
  return (
    <button
      style={{
        padding: `${props.paddingtb}px ${props.paddinglr}px`,
        fontSize: `${props.fsize}px`,
      }}
      className="btn-red"
    >
      {props.name}
    </button>
  );
}

export default Btnred;
