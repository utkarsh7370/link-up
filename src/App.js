import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainContent from "./components/maincontent/MainContent";
import Individual from "./components/Individual/Individual";
import Login from "./components/Sign/Login/Login";
import Register from "./components/Sign/Register/Register";
import AccountDetail from "./components/SetupAccount/AccountDetail";
import Cart from "./components/Individual/Cart/Cart";
import Payment from "./components/Payment/Payment";
import PaymentSuccess from "./components/Payment/PaymentSuccess";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />}></Route>
          <Route path="/individual" element={<Individual />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/details" element={<AccountDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/paymentsuccess" element={<PaymentSuccess />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
