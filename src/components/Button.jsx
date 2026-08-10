import React from "react";

function Button({
  text,
  children,
  onClick,
  type = "button",
  className,
  disabled,
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...rest}
    >
      {children ? children : text}
    </button>
  );
}

export default Button;
