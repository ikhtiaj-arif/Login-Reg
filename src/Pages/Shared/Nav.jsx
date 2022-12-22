import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaAlignLeft } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar py-5 lg:w-3/4 mx-auto">
      <div className="navbar-start relative">
        {/* conditional check for responsive toggle button */}
        <label
          onClick={() => setOpen(!open)}
          className="btn btn-ghost text-xl md:hidden "
        >
          {open ? <HiOutlineXMark /> : <FaAlignLeft />}
        </label>

        <Link
          to="/"
          className="flex items-center normal-case text-3xl text-gray-900 font-serif"
        >
          <img className="w-8 rounded-full" src="" alt="" />
            Title
        </Link>
      </div>
      <div className="navbar-center">
        <ul
          className={`md:flex items-center py-8 md:py-0 bg-gray-300 md:bg-base-100 text-gray-900 text-lg md:text-gray-900 font-semibold absolute md:static left-0 md:pl-0 pl-9 w-full md:w-auto transition-all duration-500 ease-in z-10  ${
            open ? "top-16" : "top-[-600px]"
          }`}
        >
          <li className="p-3 ">
            <Link to="/">Home</Link>
          </li>
        
          <li className="p-3 ">
            <a href="#about">About</a>
          </li>
  
          <li>
            <div className="w-2/4 lg:w-full">
              <button title="  Login" className="btn btn-success">
                Login
              </button>
            </div>
          </li>
        </ul>
      </div>

     
    </div>
  );
};

export default Nav;
