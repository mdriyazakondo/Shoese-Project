import { Menu, ShoppingCart, X } from "lucide-react";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { carts, setCarts } = useContext(ProductsContext);

  const [isActive, setIsActive] = useState(() => {
    return localStorage.getItem("activeNav") || "Home";
  });

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },

    ,
  ];

  // Active item update হলে localStorage-এ save করা
  const handleActive = (item) => {
    setIsActive(item);
    localStorage.setItem("activeNav", item);
  };

  return (
    <div className=" shadow fixed right-0 top-0 z-50 left-0 bg-white/90">
      <div className="flex items-center justify-between max-w-7xl mx-6 md:mx-auto py-3">
        <h3 className="text-3xl text-amber-400 font-semibold uppercase">
          shopping
        </h3>
        <nav>
          {/* Desktop */}
          <ul className="md:flex items-center gap-8 hidden">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => handleActive(item.name)}
                className={`relative cursor-pointer transition-all duration-500 text-xl font-semibold text-amber-400
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-400
                  after:transition-all after:duration-500
                  ${isActive === item.name ? "after:w-full" : "after:w-0"}`}
              >
                <Link to={item.path}> {item.name}</Link>
              </li>
            ))}

            {/* Shopping Cart */}
            <Link to={"/carts"}>
              <li
                onClick={() => handleActive("Cart")}
                className={`relative flex items-center text-xl  cursor-pointer transition-all duration-500
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-400
                after:transition-all after:duration-500
                ${isActive === "Cart" ? "after:w-full" : "after:w-0"}`}
              >
                <ShoppingCart />
                <span className="absolute text-sm -top-4 -right-4 bg-amber-400 text-white w-6 h-6 rounded-full flex items-center justify-center p-2">
                  {carts.length > 0
                    ? carts.reduce((total, item) => total + item.quantity, 0)
                    : 0}
                </span>
              </li>
            </Link>
          </ul>

          {/* Mobile */}
          <div className="flex items-center gap-6 md:hidden">
            {/* Cart */}
            <Link to={`/carts`}>
              <li className="relative flex items-center text-xl">
                <ShoppingCart />
                <span className="absolute text-sm -top-4 -right-4 bg-amber-400 text-white w-6 h-6 rounded-full flex items-center justify-center p-2">
                  {carts.length > 0
                    ? carts.reduce((total, item) => total + item.quantity, 0)
                    : 0}
                </span>
              </li>
            </Link>

            {/* Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="cursor-pointer" />
              ) : (
                <Menu className="cursor-pointer" />
              )}
            </button>
          </div>
        </nav>
      </div>
      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="absolute right-0 text-left w-[150px] shadow p-4 space-y-4 text-amber-400 bg-white">
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => {
                handleActive(item.name);
                setIsOpen(false);
              }}
              className={`relative cursor-pointer transition-all duration-500 pb-2 text-xl font-semibold text-amber-400
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-400
                after:transition-all after:duration-500
                ${isActive === item.name ? "after:w-full" : "after:w-0"}`}
            >
              <Link to={item.path}> {item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
