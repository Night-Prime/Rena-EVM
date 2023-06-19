import React from "react";
import "./sales.css";
import chart from "../../../assets/Graph.png";
import Table from "../../../components/Table/Table";

const Sales = () => {
  return (
    <div className="sales">
      <header>
        <h1>Sales Report</h1>
      </header>
      <div className="sales-container">
        <main>
          <div className="top">
            <div className="top-inner">
              <img src={chart} alt={chart} />
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-inner">
              <h4>Sales History </h4>
              <Table />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sales;
