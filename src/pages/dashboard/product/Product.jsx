import React from "react";
import "./product.css";
import { products } from "../../../data";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <header>
        <header className="inner">
          <h1>Items</h1>
          <button>
            <Link to="/dashboard/addproduct">Add Product</Link>
          </button>
        </header>
      </header>
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}(Naira)</td>
                <td>{product.quantity}</td>
                <td>{product.weight}(kg)</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
