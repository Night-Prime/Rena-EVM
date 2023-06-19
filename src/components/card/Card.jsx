import React from "react";
import "./card.css";
import Icon from "../../assets/icon";

const Card = ({ title, digits }) => {
  return (
    <div className="card">
      <div className="card-container">
        <Icon.Chart />
        <div className="card-header">
          <h5>↑{digits}</h5>
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
