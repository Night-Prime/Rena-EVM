import React from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="user">
      <header>
        <h1>Create Product</h1>
      </header>
      <div className="user-container">
        <main>
          <form action="">
            <label htmlFor="">
              Product Name
              <input type="text" placeholder="Wood" />
            </label>
            <label htmlFor="">
              Product Category
              <select name="category" id="category">
                <option value="category-1">Category-1</option>
                <option value="category-2">Category-1</option>
              </select>
            </label>
            <label htmlFor="">
              Product Quantity
              <input type="number" placeholder="100" />
            </label>
            <label htmlFor="">
              Product Price
              <input type="number" placeholder="#400,000" />
            </label>
            <label htmlFor="">
              Product Weight
              <input type="number" placeholder="500Kg" />
            </label>
            <button className="form-btn">
              <Link to="/dashboard/product">Create Product</Link>
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddProduct;
