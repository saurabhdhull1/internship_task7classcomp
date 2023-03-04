import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nopage from "./component/nopage/Nopage";
import Login from "./component/login/Login";
import Content from "./component/content/Content";
import Cart from "./component/cart/Cart";
import Profile from "./component/profile/Profile";
import Navbar from "./component/navbar/Navbar";
import LottieAnimation from "./LottieAnimation";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/content" element={<Content />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <div className="fixed right-[-30px] bottom-[-10px] sm:right-1 sm:bottom-2 z-50"><LottieAnimation/></div>
      </BrowserRouter>
    );
  }
}
