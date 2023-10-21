import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 lg:py-10 xl:py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8 lg:p-12">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Tasty Tryst</h1>

          <p>1234 Delicious St</p>
          <p>Foodsville</p>
          <p>Email: info@tastytryst.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="text-center md:text-left">
          <p>Follow us on social media:</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="text-2xl" data-tip="Facebook">
              <FaFacebook style={{ color: "#1877f2" }} />{" "}
              {/* Facebook Icon with custom color */}
            </a>
            <a href="#" className="text-2xl" data-tip="Twitter">
              <FaTwitter style={{ color: "#1da1f2" }} />{" "}
              {/* Twitter Icon with custom color */}
            </a>
            <a href="#" className="text-2xl" data-tip="Instagram">
              <FaInstagram style={{ color: "#e4405f" }} />{" "}
              {/* Instagram Icon with custom color */}
            </a>
            <a href="#" className="text-2xl" data-tip="LinkedIn">
              <FaLinkedin style={{ color: "#0077b5" }} />{" "}
              {/* LinkedIn Icon with custom color */}
            </a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <p>Subscribe to our newsletter for updates and offers:</p>
          <form className="mt-4">
            <div className="flex items-center space-y-2 md:space-y-0 md:space-x-2">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-600 rounded-md p-2 w-full md:w-64"
              />
              <button className="bg-blue-500 text-white rounded-md p-2">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-sm mt-2">
          &copy; {currentYear} Tasty Tryst. All rights reserved. Made with{" "}
          <FaHeart className="text-red-500 text-2xl cursor-pointer" />
          by <span className="text-2xl">Tasty Tryst</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
