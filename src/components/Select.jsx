import React from "react";

function Select({
  name,
  value,
  onChange,
  children = [],
  placeholder,
  className = "",
}) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition
        hover:border-gray-300
        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10
        dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200
        dark:hover:border-gray-600
        dark:focus:border-blue-500
        ${className}`}
    >
      <option value="" disabled>
        {placeholder}
      </option>

      {children.map((child, index) => (
        <option key={index} value={child}>
          {child}
        </option>
      ))}
    </select>
  );
}

export default Select;
