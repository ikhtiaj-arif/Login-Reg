import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaAlignLeft } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import { UserAuth } from "../../Context/UserContext";
import toast from "react-hot-toast";


const Nav = () => {
  const [open, setOpen] = useState(false);
    const { user, logOutUser } = useContext(UserAuth)

    const handleLogOut = () => {
      logOutUser()
        .then(() => {
          toast.success("Log Out Successful!")
        })
        .catch((e) => console.log(e));
    };

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
          <li className="p-3 ">
            <a href="#about"></a>
          </li>
  
          <li>
            {user && user.uid ? (
                <div className="flex items-center ">
                  {user.photoURL ? (
                    <div className="relative">
                      <img
                        className="w-10 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                      <div className="absolute text-gray-800 top-0 left-0 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                        {user.displayName}
                      </div>
                    </div>
                  ) : (
                    <FaUserTie className="w-10 text-xl rounded-full"></FaUserTie>
                  )}
                  <div className="w-2/4">

                  <button
                    
                    onClick={handleLogOut}
                    title='Logout'
                    >logout</button>
                    </div>
                    
                 
                </div>
              ) : (
            <div className="w-2/4 lg:w-full">
              <button title="  Login" className="btn btn-success">
                Login
              </button>
            </div>
              )}
          </li>
        </ul>
      </div>

     
    </div>
  );
};

export default Nav;
