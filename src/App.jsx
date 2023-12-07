import { FaHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { HiPhone, HiMail } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./style";

import {
  logotipo,
  BannerPrincipal,
  neckless,
  anklet,
  bracelet,
  earrings,
  ring,
  Separator,
} from "./assets";

function App() {
  return (
    <div className="overflow-hidden scroll-smooth font-josefin">
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

      {/* Listado de productos */}
      <div id="content" className="flex flex-col items-center">
        <div className="container flex justify-evenly gap-8 px-16 pt-8">
          <a
            href="#"
            className="group relative flex items-center justify-center"
          >
            <img src={neckless} alt="" className="relative z-10" />
            <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
              Cadenas
            </span>
            <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
          </a>
          <a
            href="#"
            className="group relative flex items-center justify-center"
          >
            <img src={earrings} alt="" className="relative z-10" />
            <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
              Colgantes
            </span>
            <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
          </a>
          <a
            href="#"
            className="group relative flex items-center justify-center"
          >
            <img src={bracelet} alt="" className="relative z-10" />
            <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
              Brazaletes
            </span>
            <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
          </a>
          <a
            href="#"
            className="group relative flex items-center justify-center"
          >
            <img src={ring} alt="" className="relative z-10" />
            <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
              Anillos
            </span>
            <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
          </a>
          <a
            href="#"
            className="group relative flex items-center justify-center"
          >
            <img src={anklet} alt="" className="relative z-10" />
            <span className="absolute font-ebGaramond text-3xl font-bold italic text-white transition duration-300 group-hover:z-20 ">
              Tobilleras
            </span>
            <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
          </a>
        </div>

        {/* Ver todos los productos */}
        <div className="container mt-5 flex justify-end px-16">
          <a
            href="#"
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
          </a>
        </div>
      </div>

      <div
        className="bg-clip-padding"
        style={{ backgroundImage: `url(${BannerPrincipal})` }}
      >
        {/* Separador superior */}
        <svg
          width="100%"
          height="100px"
          viewBox="0 0 1280 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-[-1] fill-primary"
        >
          <g>
            <path d="M1280 0l-131.81 111.68c-16.47 14-35.47 21-54.71 20.17L173 94a76.85 76.85 0 0 1-36.79-11.46L0 0z" />
          </g>
        </svg>

        {/* Productos Desctacados */}
        <div className="flex w-full justify-center bg-primary ">
          <div className="mt-14 block text-center font-ebGaramond">
            <h3 className="text-7xl italic ">Nuestra colección destacada</h3>
            <hr className="border" />
            <span className="font-josefin text-xl uppercase tracking-widest text-secondary ">
              las Mas vendidas
            </span>
          </div>
        </div>

        {/* Grilla de Productos */}
        <div className="flex w-full flex-wrap bg-primary px-16 pt-14 text-center md:px-64">
          <div className="group relative w-1/4 p-6">
            <a href="#product">
              <div className="flex justify-center">
                <img
                  src={neckless}
                  alt=""
                  className="h-80 object-cover group-hover:opacity-60 "
                />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col p-1 text-start text-sm">
                  <span className="">Collar</span>
                  <span className="text-gray-700">Collar negro</span>
                </div>
                <div className="font-medium">$15.000</div>
              </div>
            </a>
          </div>
          <div className="group relative w-1/4 p-6">
            <a href="#product">
              <div className="flex justify-center">
                <img
                  src={neckless}
                  alt=""
                  className="h-80 object-cover group-hover:opacity-60 "
                />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col p-1 text-start text-sm">
                  <span className="">Collar</span>
                  <span className="text-gray-700">Collar negro</span>
                </div>
                <div className="font-medium">$15.000</div>
              </div>
            </a>
          </div>
          <div className="group relative w-1/4 p-6">
            <a href="#product">
              <div className="flex justify-center">
                <img
                  src={neckless}
                  alt=""
                  className="h-80 object-cover group-hover:opacity-60 "
                />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col p-1 text-start text-sm">
                  <span className="">Collar</span>
                  <span className="text-gray-700">Collar negro</span>
                </div>
                <div className="font-medium">$15.000</div>
              </div>
            </a>
          </div>
          <div className="group relative w-1/4 p-6">
            <a href="#product">
              <div className="flex justify-center">
                <img
                  src={neckless}
                  alt=""
                  className="h-80 object-cover group-hover:opacity-60 "
                />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col p-1 text-start text-sm">
                  <span className="">Collar</span>
                  <span className="text-gray-700">Collar negro</span>
                </div>
                <div className="font-medium">$15.000</div>
              </div>
            </a>
          </div>
        </div>

        {/* Separador Inferior */}
        <svg
          width="100%"
          height="100px"
          viewBox="0 0 1280 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-primary"
        >
          <g>
            <path d="M1280 0l-131.81 111.68c-16.47 14-35.47 21-54.71 20.17L173 94a76.85 76.85 0 0 1-36.79-11.46L0 0z" />
          </g>
        </svg>
      </div>

      <div className="py-32 text-center uppercase">
        Sección de Ofertas o Promociones:
      </div>
      <div className="py-32 text-center uppercase">
        Sobre Nosotros (opcional):
      </div>
      <div className="py-32 text-center uppercase">
        Testimonios o Reseñas de Clientes:
      </div>
      <div className="py-32 text-center uppercase">
        Blog o Consejos de Joyería (opcional):
      </div>
      <div className="py-32 text-center uppercase">
        Suscripción al Boletín Informativo:
      </div>
      <div className="py-32 text-center uppercase">FOOTER</div>
    </div>

    // Sección de Ofertas o Promociones:

    // Sobre Nosotros (opcional):

    // Testimonios o Reseñas de Clientes:

    // Blog o Consejos de Joyería (opcional):

    // Suscripción al Boletín Informativo:
  );
}

export default App;
