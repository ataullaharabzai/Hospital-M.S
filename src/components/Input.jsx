import React from "react";

function Input({ className, type, value, onChange, name }) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={className}
        name={name}
      />
    </div>
  );
}

export default Input;
