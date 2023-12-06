import { FaHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { HiPhone, HiMail } from "react-icons/hi";

import styles from "./style";

import {
  logotipo,
  BannerPrincipal,
  neckless,
  anklet,
  bracelet,
  earrings,
  ring,
} from "./assets";

function App() {
  return (
    <div className="overflow-hidden font-josefin ">
      {/* Barra de anuncios Superior */}
      <div className="hidden justify-between bg-backDark px-24 py-2 text-white lg:flex">
        <ul className="ul hover:[&>li]:duration-400 flex flex-1 flex-row gap-3 text-sm [&>li>a]:font-normal [&>li]:transition-colors [&>li]:duration-700 hover:[&>li]:text-black hover:[&>li]:transition-colors">
          <li>
            <a href="#">Tw</a>
          </li>
          <li>
            <a href="#">Fb</a>
          </li>
          <li>
            <a href="#">Ig</a>
          </li>
          <li>
            <a href="#">Yt</a>
          </li>
        </ul>
        <p className="flex-1 text-center font-light">
          Obtén un -10% de descuento con el código: 'BRILLAS'
        </p>
        <ul className="hover:[&>li]:duration-400 flex flex-1 justify-end  gap-2 [&>li]:transition-colors [&>li]:duration-700 hover:[&>li]:text-black hover:[&>li]:transition-colors">
          <li className="flex gap-2">
            <HiPhone className="self-center" />
            <a href="#">
              <span className="self-center text-sm font-normal">
                +569 - 7211 - 6431
              </span>
            </a>
          </li>
          <span>|</span>
          <li className="flex gap-2">
            <HiMail className="self-center" />
            <a href="#">
              <span className="text-md self-center font-normal">
                info@joyasbrillas.cl
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* Navegación Principañ */}
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

      {/* Banner Principal */}
      <div
        className="flex h-[65vh] w-full bg-cover bg-center "
        style={{ backgroundImage: `url(${BannerPrincipal})` }}
      >
        <div className="ml-[6rem] flex max-w-[700px] flex-col gap-y-4 pt-44">
          <div className="inline-block">
            <span className="inline-block bg-gradient-to-r from-yellow-200 to-primary bg-clip-text font-ebGaramond text-xl font-bold capitalize italic text-transparent">
              Diseños Exclusivos
            </span>
          </div>
          <h1 className="text-5xl font-semibold uppercase leading-snug tracking-widest text-white">
            Joyas de plata
          </h1>
          <p className="balanc text-lg text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            repudiandae nobis quibusdam error eius minima iste facilis adipisci.
          </p>
          <div className="mt-4 flex gap-5 font-ebGaramond">
            <button
              type="button"
              className="border bg-white px-10 py-2 font-ebGaramond text-xl italic tracking-wide text-black duration-150 hover:border-secondary hover:bg-secondary hover:text-white hover:transition-all hover:duration-75"
            >
              Ver Catálogo
            </button>
            <button
              type="button"
              className="border px-10 py-2 font-ebGaramond text-xl italic text-white duration-150 hover:border-yellow-600 hover:bg-yellow-600 hover:text-black hover:transition-all hover:duration-75"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly gap-8 px-32 py-8">
        <a href="#" className="group relative flex items-center justify-center">
          <img src={neckless} alt="" srcset="" className="relative z-10" />
          <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
            Cadenas
          </span>
          <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
        </a>
        <a href="#" className="group relative flex items-center justify-center">
          <img src={earrings} alt="" srcset="" className="relative z-10" />
          <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
            Colgantes
          </span>
          <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
        </a>
        <a href="#" className="group relative flex items-center justify-center">
          <img src={bracelet} alt="" srcset="" className="relative z-10" />
          <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
            Brazaletes
          </span>
          <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
        </a>
        <a href="#" className="group relative flex items-center justify-center">
          <img src={ring} alt="" srcset="" className="relative z-10" />
          <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
            Anillos
          </span>
          <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
        </a>
        <a href="#" className="group relative flex items-center justify-center">
          <img src={anklet} alt="" srcset="" className="relative z-10" />
          <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
            Tobilleras
          </span>
          <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
        </a>
      </div>
    </div>
  );
}

export default App;
