import React, { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";

const Button = ({ title, customStyle }) => {
  const {currentColor} = useStateContext()
  return (
    <button
      style={{backgroundColor: currentColor}}
      className={`rounded-md text-white font-bold cursor:pointer ${customStyle} hover:shadow-md hover:opacity-90 hover:shadow-gray-500/30 hover:bg-${currentColor} `}
    >
      {title}
    </button>
  );
};

export default Button;
