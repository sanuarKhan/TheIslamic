import React from "react";
import { navigationItems } from "./types";

export function NavigationBar() {
  return (
    <nav
      className="flex gap-10 px-11 py-4 w-full text-xl font-bold text-center text-black rounded-xl bg-slate-500 bg-opacity-60 max-w-[1264px] max-md:px-5 max-md:max-w-full"
      role="navigation"
    >
      {navigationItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className={`${index === 0 ? "grow text-white" : ""} ${
            item.label === "About Us" ? "grow shrink w-[91px]" : ""
          }`}
          aria-current={index === 0 ? "page" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
