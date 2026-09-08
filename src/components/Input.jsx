import React from "react";

function Input({
  className = "",
  value,
  onChange,
  placeholder,
  type,
  ...props
}) {
  return (
    <input
      {...props}
      className={`${className} rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:hover:border-slate-600 dark:focus:border-blue-500`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}

export default Input;
