import React, { useContext } from "react";
import {assets} from "../assets/assets.js"
import { AppContext } from "../context/AppContext.jsx";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/hotels" },
    { name: "Rooms", path: "/rooms" },
    { name: "About", path: "/about" },
  ];

  const  {navigate , user, setUser}= useContext(AppContext);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogout = () => {
    setUser(null);
    navigate("/");
    toast.success("Logged out successfully");
  };

  return (
    <nav
      className={`fixed top-0 left-0 bg-[#ff6347] w-full flex items-center py-6 justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <img src={assets.logo} alt="" />
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`text-white group flex flex-col gap-0.5 `}
          >
            {link.name}
            <div
              className={`bg-white h-0.5  w-0 group-hover:w-full transition-all duration-300`}
            />
          </a>
        ))}
        <button
          className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer  transition-all text-white`}
        >
          Owner
        </button>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        

        {
          user ? (
            <div className="relative group inline-block">
              <img src={assets.profile_icon} alt="" className="w-12 h-12 rounded-full cursor-pointer" />

              {/* {dropdown} */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 py-1 z-50">
                <ul>
                  <li>
                    <Link to={`/my-bookings`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Bookings</Link>
                  </li>
                  <li>
                    <Link to={"/settings"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                  </li>
                  <li onClick={handleLogout}>
                    <Link to={"/logout"}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button onClick={() => navigate("/login")}
              className={`text-white border text-sm px-8 py-2.5 rounded-full ml-4 transition-all duration-500 hover:bg-white hover:text-[#ff6347] cursor-pointer`}
            >
              Login
            </button>
          )
        }
       
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer `}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all text-white">
          Owner
        </button>

        <button
          onClick={() => navigate("/login")}
          className={`bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500 hover:bg-white hover:text-black ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
