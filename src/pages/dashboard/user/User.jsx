import React from "react";
import "./user.css";
import Icon from "../../../assets/icon";
import { staffs } from "../../../data";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <header>
        <header className="inner">
          <h1>Staff Information</h1>
          <button>
            <Link to="/dashboard/adduser">New Staff</Link>
          </button>
        </header>
      </header>
      <div className="user-container">
        <main>
          <div className="top">
            <div className="top-inner">
              <div className="top-icon">
                <Icon.Person />
              </div>
              <div className="top-info">
                <h3>Name: Akinyemi Adejoke</h3>
                <h3>Postion: Operation Manager</h3>
                <h3>ID: 9579DHFBUB960 </h3>
                <h3>Level: Tier 3</h3>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-inner">
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Department</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffs.map((staff) => (
                      <tr key={staff.id}>
                        <td>{staff.id}</td>
                        <td>{staff.name}</td>
                        <td>{staff.position}</td>
                        <td>{staff.department}</td>
                        <td>{staff.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default User;
