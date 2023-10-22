import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

    const handleLogOut = () => {
      logOut()
      navigate("/login");
    };
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
          <h1 className="text-3xl font-bold btn-outline">Tasty Tryst</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link className="btn-outline" to="/">
            Home
          </Link>
          <Link className="btn-outline" to="/menu">
            Menu
          </Link>
          <Link className="btn-outline" to="/order">
            Our Shop
          </Link>
          <a className="btn-outline" href="/contact">
            Contact
          </a>
        </div>
        <div className="hidden md:block">
          {user ? (
            <div className="flex items-center gap-2">
              <img
                className="w-12 h-12 rounded-full"
                src={user.photoURL}
                alt={user.name}
                loading="lazy"
              />
              <button
                onClick={handleLogOut}
                className="btn-outline"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login" onClick={handleLogin} className="btn-outline">
              Login
            </Link>
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
              <Link className="btn-outline" to="/">
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link className="btn-outline" to="/menu">
                Menu
              </Link>
            </li>
            <li className="py-2">
              <Link className="btn-outline" to="/order">
                Our Shop
              </Link>
            </li>
            <li className="py-2">
              <a className="btn-outline" href="/contact">
                Contact
              </a>
            </li>
            <div>
              {user ? (
                <div className="text-white">
                  <img
                    className="w-12 mx-auto rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    src={user.photoURL}
                    alt=""
                  />
                  <button
                    onClick={handleLogOut}
                    className="btn-outline"
                  >
                    Login
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <button className="btn-primary transition duration-300 ease-in-out transform hover:scale-105">
                    Sign In
                  </button>
                </Link>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
