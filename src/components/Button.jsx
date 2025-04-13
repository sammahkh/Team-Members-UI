import React from "react";

function Button({ variant, children }) {
  return <button className={`button ${variant}`}>{children}</button>;
}

export default Button;
