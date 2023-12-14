import { neckless, BannerPreordena } from "../assets";

export function TopProducts() {
  return (
    <>
      <div className="mt-4 text-white md:mt-12">
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
        <div className="bg-primary py-16">
          <div className="flex w-full justify-center ">
            <div className="mt-14 block text-center font-ebGaramond">
              <h3 className="px-8 text-7xl italic">
                Nuestra colección destacada
              </h3>
              <hr className="my-2 border border-secondary" />
              <span className="font-josefin text-xl uppercase tracking-widest text-secondary ">
                las Mas vendidas
              </span>
            </div>
          </div>

          {/* Grilla de Productos */}
          <div className="flex w-full flex-wrap px-16 pt-14 text-center md:px-64">
            <div className="group relative w-1/4 p-6">
              {/* Enlace a Producto */}
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
                    <span className="text-gray-200">Collar negro</span>
                  </div>
                  <div className="font-medium">$15.000</div>
                </div>
              </a>
            </div>
            <div className="group relative w-1/4 p-6">
              {/* Enlace a Producto */}
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
                    <span className="text-gray-200">Collar negro</span>
                  </div>
                  <div className="font-medium">$15.000</div>
                </div>
              </a>
            </div>
            <div className="group relative w-1/4 p-6">
              {/* Enlace a Producto */}
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
                    <span className="text-gray-200">Collar negro</span>
                  </div>
                  <div className="font-medium">$15.000</div>
                </div>
              </a>
            </div>
            <div className="group relative w-1/4 p-6">
              {/* Enlace a Producto */}
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
                    <span className="text-gray-200">Collar negro</span>
                  </div>
                  <div className="font-medium">$15.000</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative h-[80vh] bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${BannerPreordena})` }}
      >
        {/* Separador Inferior */}
        <svg
          width="100%"
          height="100px"
          viewBox="0 0 1280 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-20 fill-primary "
        >
          {" "}
          <g>
            {" "}
            <path d="M1280 0l-131.81 111.68c-16.47 14-35.47 21-54.71 20.17L173 94a76.85 76.85 0 0 1-36.79-11.46L0 0z" />{" "}
          </g>{" "}
        </svg>
        <div className="absolute right-0 top-0 z-10 h-[100%] w-full bg-black opacity-50 "></div>
      </div>
    </>
  );
}
