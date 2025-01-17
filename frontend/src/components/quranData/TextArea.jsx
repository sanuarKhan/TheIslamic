import * as React from "react";

function TextArea({ label, name, className = "" }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="ml-2.5 text-sm font-bold text-stone-900">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className={`px-5 py-7 mt-3.5 rounded-xl bg-zinc-300 text-black text-opacity-40 ${className}`}
        aria-label={label}
      />
    </div>
  );
}

export default TextArea;
