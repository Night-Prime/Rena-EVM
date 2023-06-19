import React from "react";
import "./overview.css";
import Card from "../../../components/card/Card";
import Table from "../../../components/Table/Table";

const Overview = () => {
  return (
    <div className="overview">
      <header>
        <h1>Inventory Overview</h1>
      </header>
      <div className="overview-container">
        <main>
          <div className="top">
            <div className="top-inner">
              <Card title="Products" digits="18.6%" />
              <Card title="Orders" digits="9.6%" />
              <Card title="Staffs" digits="10.0%" />
              <Card title="Sales" digits="13.5%" />
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-inner">
              <h2>Order History </h2>
              <Table />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Overview;
