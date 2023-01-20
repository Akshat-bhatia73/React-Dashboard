import React from "react";
import CardMeetingList from "../../components/Meeting Schedule/CardMeetingList";
import CardTransaction from "../../components/Transactions/CardTransaction";
import Chart from "../../components/Chart";
import FeaturedChart from "../../components/FeaturedChart";
import WebsiteDataTable from "../../components/tables/WebsiteDataTable";
import Widget from "../../components/Widget";

const Home = () => {
  return (
    <>
      <div className="widgets px-5 mt-8 flex flex-col sm:grid sm:grid-cols-2 xl:flex xl:flex-wrap xl:flex-row gap-10">
        <Widget type="users" amount="23k" growth={20} iconBg="#FD5D5D" />
        <Widget type="orders" amount="23.18k" growth={30.27} iconBg="#00D7FF" />
        <Widget type="earnings" amount="376k" growth={17} iconBg="#f94892" />
        <Widget
          type="balance"
          amount="50.17k"
          growth={-7.65}
          iconBg="#a66cff"
        />
      </div>
      <div className="charts px-5 mt-8 grid grid-cols-6 gap-10">
        <FeaturedChart />
        <WebsiteDataTable />
        <Chart />
        <CardTransaction />
        <CardMeetingList />
      </div>
    </>
  );
};

export default Home;
