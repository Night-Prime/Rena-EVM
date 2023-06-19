import React from "react";
import "./sidebar.css";
import home from "../../assets/home.png";
import access from "../../assets/access-control.png";
import product from "../../assets/package.png";
import sales from "../../assets/sales.png";
import power from "../../assets/power.png";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <header>
          <h1>SSI</h1>
        </header>
        <div className="side-link">
          <button>
            <Link to="/dashboard">
              <img src={home} alt={home} />
            </Link>
          </button>
          <button>
            <Link to="/dashboard/user">
              <img src={access} alt={access} />
            </Link>
          </button>
          <button>
            <Link to="/dashboard/product">
              <img src={product} alt={product} />
            </Link>
          </button>
          <button>
            <Link to="/dashboard/sales">
              <img src={sales} alt={sales} />
            </Link>
          </button>
        </div>
        <div className="sidebtn">
          <button>
            <Link to="/">
              <img src={power} alt={power} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
