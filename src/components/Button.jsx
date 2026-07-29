import React from "react";

function Button({ text, onClick, type = "button", className, ...rest }) {
  return (
    <button type={type} onClick={onClick} className={className} {...rest}>
      {text}
    </button>
  );
}

export default Button;
