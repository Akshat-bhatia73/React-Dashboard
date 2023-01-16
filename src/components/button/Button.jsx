import React from "react";

const Button = ({ title, customStyle }) => {
  return (
    <button
      className={`rounded-md bg-gray-200 dark:bg-transparent dark:border-2 dark:border-theme-skyblue/40 text-dark/90 dark:text-theme-skyblue/70 font-bold hover:bg-gray-400/70 dark:hover:bg-theme-skyblue/10 cursor:pointer ${customStyle} `}
    >
      {title}
    </button>
  );
};

export default Button;
