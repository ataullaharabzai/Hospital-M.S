import React from "react";

function Button({
  text,
  children,
  onClick,
  type = "button",
  className,
  ...rest
}) {
  return (
    <button type={type} onClick={onClick} className={className} {...rest}>
      {children ? children : text}
    </button>
  );
}

export default Button;
