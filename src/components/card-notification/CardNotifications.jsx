import Button from "../button/Button";
import React from "react";
import { notificationsData } from "../../data/DataNotifications";

const CardNotifications = () => {
  return (
    <div className="flex flex-col px-2 py-3 w-60 xs:w-80 sm:w-96 border-2 border-dark/10 dark:border-main-text/10 bg-white dark:bg-second-dark dark:shadow-gray-700/40 shadow-lg shadow-gray-400/35 text-dark/90 dark:text-main-text rounded-md">
      <div className="title flex items-center px-2 py-3 border-b border-dark/20 dark:border-main-text/20 justify-between cursor-pointer hover:bg-gray-400/30 dark:hover:bg-gray-100/10">
        <h1 className="text-xl font-bold">Notifications</h1>
        <span className="text-sm px-2 rounded-full text-theme-orange bg-theme-orange/10 dark:text-theme-skyblue dark:bg-theme-skyblue/10">
          2 New
        </span>
      </div>
      <div className="notifications flex flex-col child-hover:">
        {notificationsData.map((data) => {
          return (
            <div key={data.subTitle} className="flex p-2 items center justify-between border-b border-dark/20 dark:border-main-text/20 cursor-pointer hover:bg-gray-400/30 dark:hover:bg-gray-100/10">
              <div className="left flex items-center gap-3">
                <div className="relative">
                  <img
                    src={data.avatar}
                    className="h-8 w-8 xs:h-10 xs:w-10 rounded-full"
                    alt=""
                  />
                  {data.status === "unread" ? (
                    <span className="flex h-3 w-3 absolute top-0 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-theme-pink/70 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-theme-pink"></span>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <h3 className=" text-base sm:text-lg">{data.title}</h3>
                  <p className="text-sm text-dark/70 dark:text-main-text/70">
                    {data.subTitle}
                  </p>
                </div>
              </div>

              <div className="right hidden xs:flex items-center justify-center">
                <p className="text-xs text-dark/70 dark:text-main-text/70">
                  {data.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Button
        title="See All Notifications"
        customStyle="mt-3 text-lg font-bold py-2"
      />
    </div>
  );
};

export default CardNotifications;
