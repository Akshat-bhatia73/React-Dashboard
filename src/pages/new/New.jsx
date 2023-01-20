import React, { useState } from "react";
import Button from "../../components/button/Button";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState(null);

  return (
    <div className="container px-5 mt-8">
      <div className="flex flex-col justify-between sm:flex-row gap-5 px-3 py-8 bg-white dark:bg-second-dark dark:shadow-gray-700/40 shadow-lg shadow-gray-400/35 text-dark/90 dark:text-main-text rounded-md">
        <div className="right sm:w-2/6 w-full flex flex-col gap-3 items-center justify-center">
          <img
            className="h-28 w-28 sm:h-40 sm:w-40 rounded-lg"
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
          <div className="formInput">
            <label
              htmlFor="file"
              className="cursor-pointer font-bold text-blue-500/80 hover:text-blue-600 dark:text-blue-200 dark:hover:text-blue-300"
            >
              Upload {title === "User" ? "Profile" : "Product's"} Picture{" "}
              <FileUploadRoundedIcon />
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <div className="left sm:w-4/6 w-full font-bold flex flex-col gap-3 items-center sm:items-start ">
          <form>
            <div className="inputs grid grid-cols-2 gap-3  child:flex child:flex-col child:gap-2">
              {inputs.map((inp) => {
                return (
                  <div
                    key={inp.id}
                    className="forminput col-span-2 sm:col-span-1"
                  >
                    <label
                      htmlFor={inp.id}
                      className="text-dark/70 dark:text-main-text/80"
                    >
                      {inp.label}
                    </label>
                    <input
                      type={inp.type}
                      placeholder={inp.placeholder}
                      id={inp.id}
                      className="bg-transparent rounded-md focus:outline-none focus:outline-theme-green border-dark/40 dark:border-main-text/40 border-2 p-2 text-dark/90 dark:text-main-text/90"
                    />
                  </div>
                );
              })}
            </div>
            <Button title={`Add ${title}`} customStyle="py-1 px-2 mt-3" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
