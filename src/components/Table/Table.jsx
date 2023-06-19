import React from "react";
import "./table.css";
import { order } from "../../data";

const Table = () => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {order.map((orderItem) => (
            <tr key={orderItem.id}>
              <td>{orderItem.id}</td>
              <td>{orderItem.product}</td>
              <td>{orderItem.quantity}</td>
              <td>{orderItem.price}</td>
              <td>{orderItem.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
