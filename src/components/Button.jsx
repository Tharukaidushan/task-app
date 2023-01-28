import React from "react";

export const Button = ({ color, btnTxt, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {btnTxt}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
  btnTxt: "Button",
};
