import React from "react";
import { Button } from "./Button";

export const Header = ({ title, toggleAdd, showAddBtn }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddBtn ? "red" : "green"}
        btnTxt={showAddBtn ? "Close" : "Add"}
        onClick={toggleAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Title Default",
};
