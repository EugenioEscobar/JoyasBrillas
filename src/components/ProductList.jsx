import { neckless } from "../assets";
import { Link } from "react-router-dom";
import { productos } from "../constants/products";

export function ProductList() {
  return (
    <div className="flex flex-col items-center gap-8">
      <header className="flex justify-center">
        <span className="text-corn-500 mt-12 font-ebGaramond text-7xl font-medium italic ">
          Productos
        </span>
      </header>
      <hr className="w-[90%] max-w-[1500px] border border-t-secondary" />
      <section className="flex max-w-[1500px] flex-wrap justify-center gap-3">
        {productos.map((item) => {
          console.log(item);
          return (
            <Link
              to="/joya"
              key={item.Id}
              className="group relative w-full flex-grow rounded-sm pb-16 hover:bg-slate-100 md:w-[46%] lg:w-[30%] xl:w-[22%]"
            >
              <img
                src={neckless}
                alt={item.Nombre}
                className="aspect-square w-full object-center"
              />
              <div className="absolute top-0 -z-10 aspect-square w-full bg-white opacity-30 group-hover:z-10"></div>
              <div className="flex flex-col gap-4 text-center">
                <p className="font-normal opacity-75">{item.nombre}</p>
                <span className=" font-medium opacity-80">
                  {item.descripcion}
                </span>
                <p className="text-xl font-bold italic">{`$${item.total}`}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
