import React, { useState } from "react";
import {
  FaHome,
  FaPlus,
  FaCog,
  FaUsers,
  FaUtensils,
  FaShoppingCart,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

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
          <h1 className="text-3xl font-bold text-center">Tasty Tryst</h1>
          <ul className="mt-8 pl-8">
            {/* Sidebar items */}
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaHome className="mr-2 text-blue-300" />
              <a href="/">Admin Home</a>
            </li>
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaPlus className="mr-2 text-green-300" />
              <a href="/add-items">Add Items</a>
            </li>
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaCog className="mr-2 text-purple-300" />
              <a href="/management">Management</a>
            </li>
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaCog className="mr-2 text-purple-300" />
              <a href="/manage-bookings">Manage Bookings</a>
            </li>
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaUsers className="mr-2 text-red-300" />
              <a href="/all-users">All Users</a>
            </li>
            <hr className="my-4 border-gray-400" />
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaHome className="mr-2 text-blue-300" />
              <a href="/">Home</a>
            </li>
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaUtensils className="mr-2 text-green-300" />
              <a href="/menu">Menu</a>
            </li>
            <li className="flex items-center mb-4 hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaShoppingCart className="mr-2 text-yellow-300" />
              <a href="/shop">Shop</a>
            </li>
            <li className="flex items-center hover:text-yellow-500 transition duration-300 ease-in-out">
              <FaPhone className="mr-2 text-pink-300" />
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      )}

      {/* Content */}
      <div className={isSmallScreen ? "p-8" : "ml-64 p-8"}>
        {/* Main content */}
      </div>
    </div>
  );
};

export default Dashboard;
