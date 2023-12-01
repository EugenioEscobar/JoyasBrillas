import { FaHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";

import styles from "./style";

import { logotipo, BannerPrincipal } from "./assets";

function App() {
  return (
    <div className="overflow-hidden ">
      <div className="bg-yellow-900">
        <p className="p-2">asd</p>
      </div>
      <nav className="mt-4 flex items-center justify-between  px-20 font-josefin">
        <img src={logotipo} alt="Joyas Brillas" className="w-[180px]" />
        <div className="ms-20 flex flex-grow md:flex-row">
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
        <div className="flex">
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
      </nav>
      <div className="">
        <img src={BannerPrincipal} alt="Tus joyas" />
        <img src={BannerPrincipal} alt="Tus joyas" />
      </div>
    </div>
  );
}

export default App;
