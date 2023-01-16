import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const CardTitle = ({ title }) => {
  return (
    <div className="top flex items-center justify-between">
      <span className="title text-xl text-dark/70 dark:text-main-text/70 font-bold">
        {title}
      </span>
      <MoreVertIcon
        sx={{ fontSize: 35 }}
        className="text-dark/60 dark:text-main-text/60 p-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-100/10 rounded-full"
      />
    </div>
  );
};

export default CardTitle;
