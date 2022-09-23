import React, { useState } from "react";
import classes from "../styles/Dashboard.module.scss";
import Dishes from "./Dishes";
import PollResult from "./PollResult";
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className={classes.dashboard}>
        <div
          className={
            activeTab === 1
              ? classes.dashboard__tab__active
              : classes.dashboard__tab
          }
          onClick={() => handleTabChange(1)}
        >
          All Dishes
        </div>
        <div
          className={
            activeTab === 2
              ? classes.dashboard__tab__active
              : classes.dashboard__tab
          }
          onClick={() => handleTabChange(2)}
        >
          Poll Result
        </div>
      </div>
      {activeTab == 1 ? (
        <>
          <Dishes />
        </>
      ) : (
        <div style={{ position: "absolute", top: "10%" }}>
          <PollResult />
        </div>
      )}
    </>
  );
};

export default Dashboard;
