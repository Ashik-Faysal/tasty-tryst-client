import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 z-10 bg-opacity-30 absolute max-w-screen-2xl mx-auto w-full">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">Tasty Tryst</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="hidden md:block">
          {isLoggedIn ? (
            <button onClick={handleLogin} className="text-white">
              Log out
            </button>
          ) : (
            <button onClick={handleLogin} className="text-white">
              Login
            </button>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            <FaBars />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-center">
          <ul className="bg-gray-800 mt-2 p-4">
            <li className="py-2">
              <Link to="/">Home</Link>
            </li>
            <li className="py-2">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="py-2">
              <a href="/about">About Us</a>
            </li>
            <li className="py-2">
              <a href="/contact">Contact</a>
            </li>
            <div>
              {isLoggedIn ? (
                <button
                  onClick={handleLogin}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                >
                  Log out
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                >
                  Login
                </button>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
