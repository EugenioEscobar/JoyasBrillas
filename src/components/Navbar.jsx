import { FaHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { logotipo } from "../assets";

export function Navbar() {
  return (
    <nav className="mt-4 flex items-center justify-between px-8 font-josefin md:px-20">
      <img src={logotipo} alt="Joyas Brillas" className="w-[180px]" />
      <div className="ms-20 hidden flex-grow md:flex md:flex-row">
        <a
          href="#"
          className="underline-hover duration-400 relative inline px-5 text-sm font-normal uppercase text-black transition-all ease-in-out hover:text-secondary"
        >
          Inicio
        </a>
        <a
          href="#"
          className="underline-hover duration-400 relative inline px-5 text-sm font-normal uppercase text-black transition-all ease-in-out hover:text-secondary"
        >
          Tienda
        </a>
        <a
          href="#"
          className="underline-hover duration-400 relative inline px-5 text-sm font-normal uppercase text-black transition-all ease-in-out hover:text-secondary"
        >
          Nosotros
        </a>
        <a
          href="#"
          className="underline-hover duration-400 relative inline px-5 text-sm font-normal uppercase text-black transition-all ease-in-out hover:text-secondary"
        >
          Contáctanos
        </a>
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
      <button className="flex md:hidden">menu</button>
    </nav>
  );
}
