import { FaHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { HiPhone, HiMail } from "react-icons/hi";

import styles from "./style";

import { logotipo, BannerPrincipal } from "./assets";

function App() {
  return (
    <div className="overflow-hidden font-josefin ">
      {/* Barra de anuncios Superior */}
      <div className="bg-backDark flex justify-between px-24 py-2 text-white">
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

      {/* Banner Principal */}
      <div
        className="flex h-[65vh] w-full bg-cover bg-center "
        style={{ backgroundImage: `url(${BannerPrincipal})` }}
      >
        <div className="ml-32 flex max-w-[700px] flex-col pt-44">
          <div className="inline-block">
            <span className="font-ebGaramond inline-block bg-gradient-to-r from-amber-600 via-primary to-primary bg-clip-text  text-2xl font-bold capitalize text-transparent">
              Diseños elegantes
            </span>
          </div>
          <h1 className="text-[3.85rem] uppercase leading-relaxed text-white">
            Joyería de plata autentica
          </h1>
          <p className="text-lg text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            repudiandae nobis quibusdam error eius minima iste facilis adipisci,
            doloremque numquam officia culpa qui deleniti beatae. Repellat
            quaerat fuga voluptatum ad.
          </p>
          <div className="font-ebGaramond mt-5 flex gap-5">
            <button type="button" className="border px-8 py-4 text-white">
              Ver Catálogo
            </button>
            <button type="button" className="border px-8 py-4 text-white">
              Ver Catálogo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
