import React from "react";
import "./style.css";
import { Outlet } from "react-router";
import Sidebar from "../../layouts/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <main className="content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
