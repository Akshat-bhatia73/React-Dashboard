import React from "react";

const Button = ({ title, customStyle }) => {
  return (
    <button
      className={`rounded-md bg-theme-pink dark:bg-transparent dark:border-2 dark:border-theme-pink text-white dark:text-theme-pink font-bold hover:shadow-lg hover:shadow-theme-pink/50 dark:hover:shadow-none dark:hover:bg-theme-pink/10 cursor:pointer ${customStyle} `}
    >
      {title}
    </button>
  );
};

export default Button;
