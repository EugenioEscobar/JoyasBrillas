import { FaHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";

import styles from "./style";

import { logotipo, BannerPrincipal } from "./assets";

function App() {
  return (
    <div className="overflow-hidden ">
      <nav className="font-josefin mt-4 flex items-center  justify-between px-20">
        <img src={logotipo} alt="Joyas Brillas" className="w-[180px]" />
        <div className="ms-20 flex flex-grow md:flex-row">
          <a
            href="#"
            className="text-bold px-5 text-black hover:text-secondary hover:underline hover:underline-offset-8 "
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-bold px-5 text-black hover:text-secondary hover:underline hover:underline-offset-8 "
          >
            Tienda
          </a>
          <a
            href="#"
            className="text-bold px-5 text-black hover:text-secondary hover:underline hover:underline-offset-8 "
          >
            Nosotros
          </a>
          <a
            href="#"
            className="text-bold px-5 text-black hover:text-secondary hover:underline hover:underline-offset-8 "
          >
            Contáctanos
          </a>
        </div>
        <div className="flex">
          <a href="#" className="p-4">
            <FaHeart className="text-black hover:text-secondary" />
          </a>
          <a href="#" className="p-4">
            <FaCartPlus className="text-black hover:text-secondary"></FaCartPlus>
          </a>
          <a href="#" className="p-4">
            <CiSearch className="text-black hover:text-secondary" />
          </a>
        </div>
      </nav>
      <div className="">
        <img src={BannerPrincipal} alt="Tus joyas" />
      </div>
    </div>
  );
}

export default App;
