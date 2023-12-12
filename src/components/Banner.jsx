import { BannerPrincipal } from "../assets";

export function Banner() {
  return (
    <div
      className="flex h-[65vh] w-full bg-cover bg-center "
      style={{ backgroundImage: `url(${BannerPrincipal})` }}
    >
      <div className="ml-[6rem] flex max-w-[700px] flex-col gap-y-4 pt-44">
        <div className="inline-block">
          <span className="inline-block bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text font-ebGaramond text-xl font-bold capitalize italic text-transparent">
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
  );
}
