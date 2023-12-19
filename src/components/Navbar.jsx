import { Link } from "react-router-dom";

import { FiAlignJustify } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";

import { logotipo } from "../assets";

import { navLinks } from "../constants";
import { useState } from "react";

export function Navbar() {
  const [hideMenu, setToogle] = useState(true);

  return (
    <nav className="mt-4 flex items-center justify-between px-8 font-josefin md:px-20">
      <Link to="/">
        <img
          src={logotipo}
          alt="Joyas Brillas"
          className="w-[120px] md:w-[180px]"
        />
      </Link>
      <div className="ms-20 hidden flex-grow md:flex md:flex-row">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            className="underline-hover duration-400 relative inline px-5 text-sm font-normal uppercase text-black transition-all ease-in-out hover:text-secondary"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex">
        <a href="#" className="p-4">
          <FaHeart className="duration-400 text-black transition-all ease-in-out hover:text-secondary" />
        </a>
        <a href="#" className="p-4">
          <FaCartPlus className="duration-400 text-black transition-all ease-in-out hover:text-secondary"></FaCartPlus>
        </a>
        <a href="#" className="p-4">
          <CiSearch className="duration-400 text-black transition-all ease-in-out hover:text-secondary" />
        </a>
      </div>
      <ul
        className="flex flex-1 list-none 
            items-center justify-end sm:hidden"
      >
        {/* Iconos responsive del Sidebar */}
        <FiAlignJustify
          className={`${hideMenu ? "flex" : "hidden"} text-4xl text-secondary`}
          onClick={() => setToogle((prev) => !prev)}
        ></FiAlignJustify>
        <IoCloseOutline
          className={`${!hideMenu ? "flex" : "hidden"} text-4xl text-secondary`}
          onClick={() => setToogle((prev) => !prev)}
        ></IoCloseOutline>

        {/* Responsive Menu */}

        <div
          className={`${!hideMenu ? "flex" : "hidden"} absolute right-0
              top-20 mx-4 my-2 min-w-[250px] flex-col gap-y-4 rounded-xl bg-primary py-3 text-white`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="underline-hover duration-400 relative inline px-5 text-sm font-normal uppercase transition-all ease-in-out hover:text-secondary"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </ul>
    </nav>
  );
}
