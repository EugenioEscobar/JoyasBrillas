import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { neckless, anklet, bracelet, earrings, ring } from "../assets";

export function Categories() {
  return (
    <div id="content" className="mt-4 flex flex-col items-center md:mt-8">
      <div className="container flex justify-evenly gap-8 px-16 pt-8">
        <a href="#" className="group relative flex items-center justify-center">
          <img src={neckless} alt="" className="relative z-10" />
          <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
            Cadenas
          </span>
          <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
        </a>
        <a href="#" className="group relative flex items-center justify-center">
          <img src={earrings} alt="" className="relative z-10" />
          <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
            Colgantes
          </span>
          <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
        </a>
        <a href="#" className="group relative flex items-center justify-center">
          <img src={bracelet} alt="" className="relative z-10" />
          <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
            Brazaletes
          </span>
          <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
        </a>
        <a href="#" className="group relative flex items-center justify-center">
          <img src={ring} alt="" className="relative z-10" />
          <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
            Anillos
          </span>
          <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
        </a>
        <a href="#" className="group relative flex items-center justify-center">
          <img src={anklet} alt="" className="relative z-10" />
          <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
            Tobilleras
          </span>
          <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
        </a>
      </div>

      {/* Ver todos los productos */}
      <div className="container mt-5 flex justify-end px-16">
        <Link
          to="/joyas"
          className="group relative flex items-center gap-1 text-xl italic text-secondary underline underline-offset-4 hover:opacity-80"
        >
          <span className="relative transition-all duration-300 group-hover:-translate-x-4 ">
            Ver Productos
          </span>
          <FontAwesomeIcon
            icon={faChevronRight}
            beatFade={true}
            className="fa-md absolute -right-[200%] opacity-0 transition-all duration-200 ease-in-out group-hover:right-0 group-hover:opacity-100 group-hover:duration-500"
          />
        </Link>
      </div>
    </div>
  );
}
