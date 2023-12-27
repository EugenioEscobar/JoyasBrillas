import { neckless } from "../assets";
import { Link } from "react-router-dom";
import { productos } from "../constants/products";
import { LinkToProductos } from "./LinkToProducts";

export function ProductList({ counter = 16, categoria }) {
  // if (categoria)
  console.log("Productos");
  console.log(productos.filter((prod) => prod.tipo === categoria));
  const productListed = productos.slice(0, counter);
  return (
    <>
      {categoria ? (
        <span className="text flex justify-start px-36 py-10 text-4xl font-light uppercase">
          {categoria}
        </span>
      ) : null}

      <main className="flex justify-center px-16  pt-4 md:px-32">
        <div className="flex flex-1 flex-wrap justify-between px-12">
          {productListed.map((item) => {
            return (
              <article
                key={item.id}
                className="sm:w-[46%] md:w-[30%] lg:w-[22%]"
              >
                <Link
                  to="/joya"
                  className="group relative w-full flex-grow rounded-sm pb-16 hover:bg-slate-100"
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
              </article>
            );
          })}
        </div>
      </main>
      {categoria ? (
        <LinkToProductos categoria={categoria}></LinkToProductos>
      ) : null}
    </>
  );
}
