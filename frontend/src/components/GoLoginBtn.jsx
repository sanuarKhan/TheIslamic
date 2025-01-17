import React from "react";
import { useNavigate } from "react-router-dom";

const GoLoginBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <button
      onClick={handleClick}
      className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 active:bg-green-700 transition-transform transform hover:scale-110 active:scale-95 absolute bottom-4 right-4"
    >
      Login
    </button>
  );
};

export default GoLoginBtn;
