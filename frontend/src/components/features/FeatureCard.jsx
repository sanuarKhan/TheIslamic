import * as React from "react";
import { Link } from "react-router-dom";

export function FeatureCard({ imageSrc, title, imageClassName, route }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-center px-14 py-10 w-full text-xl font-bold text-center text-black whitespace-nowrap bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10">
        <Link to={route}>
        <img
          loading="lazy"
          src={imageSrc}
          alt={`${title} feature icon`}
          className={`object-contain max-w-full ${imageClassName}`}
        />
        </Link>
        <div className="mt-11 max-md:mt-10">{title}</div>
      </div>
    </div>
  );
}
