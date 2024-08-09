import React from 'react';
import { IoCart } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-[#3E3C2E] p-4 shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <img
            src="https://media.licdn.com/dms/image/D5603AQHxfdX7wn57rQ/profile-displayphoto-shrink_400_400/0/1715506870373?e=1728518400&v=beta&t=H-dh-tZEY21hjosksnfh4-2SlKlkih0LyVi30j9FwSM"
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <span className="text-[#AC8968] text-lg font-bold">Gopal's Corner</span>
        </NavLink>

        <div className="flex space-x-6 text-[#AC8968]">
          <NavLink
            to="/"
            className={({ isActive }) => 
              isActive ? "font-semibold text-[#A69080]" : "hover:text-[#A69080] transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => 
              isActive ? "font-semibold text-[#A69080]" : "hover:text-[#A69080] transition"
            }
          >
            <div className="relative">
              <IoCart className="text-2xl" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
