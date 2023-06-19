import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard";
import Overview from "./pages/dashboard/overview/Overview";
import User from "./pages/dashboard/user/User";
import AddUser from "./pages/dashboard/user/AddUser";
import Product from "./pages/dashboard/product/Product";
import AddProduct from "./pages/dashboard/product/AddProduct";
import Sales from "./pages/dashboard/sales/Sales";

function App() {
  return (
    <section className="inventory">
      <section className="inventory-inner">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Overview />} />
              <Route path="user" element={<User />} />
              <Route path="addUser" element={<AddUser />} />
              <Route path="product" element={<Product />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="Sales" element={<Sales />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </section>
    </section>
  );
}

export default App;
