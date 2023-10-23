import React, { useState } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaDollarSign,
  FaShoppingCart,
  FaStar,
  FaBook,
  FaPhone,
  FaBars,
  FaUtensils,
  FaTimes,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [cart] = useCart();
  const toggleSidebar = () => {
    setIsSmallScreen(!isSmallScreen);
  };

  window.addEventListener("resize", () => {
    setIsSmallScreen(window.innerWidth <= 768);
  });

  return (
    <div className="bg-gray-100 h-screen">
      {/* Sidebar */}
      {isSmallScreen ? (
        <div className="md:hidden p-4 fixed top-0 right-0">
          <button onClick={toggleSidebar} className="text-2xl">
            {isSmallScreen ? <FaBars /> : <FaTimes />}
          </button>
        </div>
      ) : (
        <div className="bg-blue-500 text-white w-64 py-4 fixed top-0 left-0 h-full flex flex-col">
          <h1 className="text-3xl font-bold text-center mb-4">Tasty Tryst</h1>
          <ul className="pl-4">
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaHome className="mr-2 text-blue-300" />
              <Link to="/">User Home</Link>
            </li>
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaCalendarAlt className="mr-2" />
              <Link to="/dashboard/reservation">Reservation</Link>
            </li>
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaDollarSign className="mr-2" />
              <Link to="/dashboard/payment-history">Payment History</Link>
            </li>
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaShoppingCart className="mr-2" />
              <Link to="/dashboard/my-cart">My Cart</Link>
              <div className="relative">
                <div className="bg-red-500 text-white w-6 h-6 rounded-full text-center absolute -top-4 -right-8">
                  {cart?.length || 0}
                </div>
              </div>
            </li>
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaStar className="mr-2" />
              <Link to="/dashboard/add-review">Add Review</Link>
            </li>
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaBook className="mr-2" />
              <Link to="/dashboard/my-booking">My Booking</Link>
            </li>
            <li className="mb-4">
              <hr />
            </li>
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaHome className="mr-2" />
              <Link to="/">Home</Link>
            </li>
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaUtensils className="mr-2" />
              <Link to="/menu">Menu</Link>
            </li>
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaShoppingCart className="mr-2" />
              <Link to="/shop">Shop</Link>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Content */}
      <div className={isSmallScreen ? "p-8" : "ml-64 p-8"}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
