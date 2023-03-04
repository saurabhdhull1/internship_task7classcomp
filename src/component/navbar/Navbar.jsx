import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleThemeChange() {
    this.setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  }
  render() {
    const { theme } = this.state;
    return (
      <>
        <nav class="bg-[var(--bg)] text-[var(--text)] shadow-md sticky top-0 z-50">
          <div class=" flex justify-between align-middle flex-wrap p-2 lg:px-8 ">
            <Link to="/" className="h-[40px] block sm:hidden">
              <img src="/assets/logo.png" alt="logo" />
            </Link>
            <div className="justify-between align-middle flex-wrap gap-10 p-2 hidden sm:flex">
              <Link to="/">
                <img
                  src="/assets/logo.png"
                  alt="logo"
                  className="h-[40px] cursor-pointer"
                />
              </Link>
              <span className="pt-2 cursor-pointer hover:text-pink-600">
                Men
              </span>
              <span className="pt-2 cursor-pointer hover:text-pink-600">
                Women
              </span>
              <span className="pt-2 cursor-pointer hover:text-pink-600">
                Kids
              </span>
              <span className="pt-2 cursor-pointer hover:text-pink-600">
                Beauty
              </span>
              <span className="pt-2 cursor-pointer hover:text-pink-600">
                <Link to={"/"}>Logout </Link>
              </span>
            </div>
            <div className="flex justify-between align-middle gap-4 h-[100%] p-1">
              <div onClick={this.handleThemeChange}>
                <img
                  src="/assets/heart.png"
                  alt="cart"
                  className="h-[30px] cursor-pointer hover:scale-[.9]"
                />
                <div className="text-[12px] text-center">Theme</div>
              </div>
              <Link to="/cart">
                <img
                  src="/assets/cart.png"
                  alt="cart"
                  className="h-[30px] cursor-pointer hover:scale-[.9]"
                />
                <div className="text-[12px] text-center">Cart</div>
              </Link>
              <Link to="/profile">
                <img
                  src="/assets/home.png"
                  alt="cart"
                  className="h-[30px] cursor-pointer hover:scale-[.9]"
                />
                <div className="text-[12px] text-center">Profile</div>
              </Link>
            </div>
          </div>
        </nav>
        <script>{(document.body.className = theme)}</script>
      </>
    );
  }
}
