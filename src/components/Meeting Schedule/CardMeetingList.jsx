import React from "react";
import Button from "../button/Button";
import CardTitle from "../card-titles/CardTitle";
import { meetingSchedule } from "../../data/MeetingData";

const CardMeetingList = () => {
  return (
    <div className="col-span-6 lg:col-span-3 mb-3 lg:mb-6 flex flex-col gap-4 p-3 bg-white dark:bg-second-dark dark:shadow-gray-700/40 shadow-lg shadow-gray-400/35 text-dark/90 dark:text-main-text/90 rounded-md ">
      <CardTitle title="Meetings" />
      <hr className="dark:border-main-text/20" />
      <div className="flex flex-col gap-5">
        {meetingSchedule.map((data) => {
          return (
            <div key={data.title} className="flex items-center justify-between">
              <div className="desc flex items-center justify-between gap-5">
                <img
                  src={data.profile}
                  alt=""
                  className="h-10 w-10 rounded-md"
                />
                <div className="flex items-center justify-between">
                  <span className="flex flex-col text-sm text-dark/50 dark:text-main-text/50 font-semibold">
                    <span className="text-lg text-dark/80 dark:text-main-text/80 font-bold">
                      {data.title}
                    </span>
                    <span>
                      {data.date.month +
                        " " +
                        data.date.day +
                        ", From: " +
                        data.date.from +
                        " - To: " +
                        data.date.to}
                    </span>
                  </span>
                </div>
              </div>
              <span
                className=" hidden xs:block px-3 py-1 rounded-full"
                style={{
                  backgroundColor: data.color + "30",
                  color: data.color,
                }}
              >
                {data.tag}
              </span>
            </div>
          );
        })}
      </div>
      <hr className="dark:border-main-text/20" />
      <Button title="Add Meeting" customStyle="xs:w-56 text-lg py-2" />
    </div>
  );
};

export default CardMeetingList;
