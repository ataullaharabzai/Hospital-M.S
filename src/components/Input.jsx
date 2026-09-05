import React from "react";

function Input({ className, type, value, onChange, name, placeholder }) {
  return (
    <div>
      <input
        placeholder={placeholder} 
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition
            placeholder:text-gray-400
            hover:border-gray-300
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10
            dark:border-gray-700  dark:text-gray-800
            dark:placeholder:text-gray-500
            dark:hover:border-gray-600
            dark:focus:border-blue-500 ${className}`}
        name={name}
      />
    </div>
  );
}

export default Input;
