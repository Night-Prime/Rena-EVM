import React from "react";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div className="user">
      <header>
        <h1>Register New Staff</h1>
      </header>
      <div className="user-container">
        <main>
          <form action="">
            <label htmlFor="">
              First Name
              <input type="text" placeholder="Kajareena" />
            </label>
            <label htmlFor="">
              Last Name
              <input type="text" placeholder="Osunde" />
            </label>
            <label htmlFor="">
              Position
              <input type="text" placeholder="Secretary" />
            </label>
            <label htmlFor="">
              Salary
              <input type="text" placeholder="#50,000" />
            </label>
            <label htmlFor="">
              Department
              <select name="department" id="department">
                <option value="Finance">Admin</option>
                <option value="Finance">Finance</option>
                <option value="Finance">Executives</option>
                <option value="Finance">Operations</option>
                <option value="Finance">Sales</option>
              </select>
            </label>
            <button className="form-btn">
              <Link to="/dashboard/user">Add Staff</Link>
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddUser;
