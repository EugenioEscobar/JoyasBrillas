import { neckless, anklet, bracelet, earrings, ring } from "../assets";
import { LinkToProductos } from "./LinkToProducts";

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
      <LinkToProductos></LinkToProductos>
    </div>
  );
}
