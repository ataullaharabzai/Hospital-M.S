import React from "react";

function Input({ className, type, value, onChange, name }) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`focus:outline-0 focus:border-2 focus:border-blue-700 ${className}`}
        name={name}
      />
    </div>
  );
}

export default Input;
