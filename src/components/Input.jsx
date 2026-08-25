import React from "react";

function Input({ className, type, value, onChange, name, placeholder }) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        className={`focus:outline-0 dark:text-slate-500 ${className}`}
        name={name}
      />
    </div>
  );
}

export default Input;
