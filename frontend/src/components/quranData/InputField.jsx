import * as React from "react";

function InputField({ label, name, required = false, className = "" }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="ml-3.5 text-sm font-bold text-black max-md:ml-2.5"
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        required={required}
        className={`px-16 py-5 mt-2 whitespace-nowrap rounded-xl bg-zinc-300 text-black text-opacity-40 max-md:px-5 ${className}`}
        aria-label={label}
      />
    </div>
  );
}

export default InputField;
