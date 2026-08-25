import React from "react";

function Button({
  text,
  title,
  children,
  onClick,
  type = "button",
  className,
  disabled,
  ...rest
}) {
  return (
    <button
    title={title}
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
