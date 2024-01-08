import { BannerPrincipal } from "../assets";

export function Banner({ linkCatalogo = "" }) {
  return (
    <div
      className="relative flex h-[40vh] w-full bg-cover bg-right md:h-[65vh]"
      style={{ backgroundImage: `url(${BannerPrincipal})` }}
    >
      <div className="absolute z-10 h-full w-full bg-black opacity-50 md:hidden"></div>
      <div className="relative z-20 ml-[4rem] flex max-w-[700px] flex-col gap-y-4 pt-20 md:ml-[4rem] md:pt-44">
        <div className="inline-block">
          <span className="hidden bg-gradient-to-r  from-yellow-200 to-yellow-500 bg-clip-text font-ebGaramond text-xl font-bold capitalize italic text-transparent md:inline-block">
            Diseños Exclusivos
          </span>
        </div>
        <h1 className="text-xl font-semibold uppercase leading-snug tracking-widest text-white md:text-5xl">
          joyas de plata exclusivas
        </h1>
        <p className="text-lg text-white">
          Envío gratis dentro de la Región Metropolitana.
        </p>
        <div className="mt-4 flex gap-5 font-ebGaramond">
          <a
            href={linkCatalogo}
            type="button"
            className="border bg-white px-10 py-2 font-ebGaramond text-xl italic tracking-wide text-black duration-150 hover:border-secondary hover:bg-secondary hover:text-white hover:transition-all hover:duration-75"
          >
            Ver Catálogo
          </a>
          <button
            type="button"
            className="border px-10 py-2 font-ebGaramond text-xl italic text-white duration-150 hover:border-yellow-600 hover:bg-yellow-600 hover:text-black hover:transition-all hover:duration-75"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
}
