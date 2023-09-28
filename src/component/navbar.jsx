import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const carts = useSelector(state => state.cartReducer);
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <Link style={{color : "white"}} className="text-xl" to="/">
        Redux Shopping Cart Application
        </Link>
        <div className="flex gap-4">
          <Link
            to="/cart"
            className="navCart"
            id="lws-cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping" />
            <span id="lws-totalCart">{carts.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
