import { neckless } from "../assets";
import { Link } from "react-router-dom";
import { productos } from "../constants/products";
import { LinkToProductos } from "./LinkToProducts";

export function ProductList({ counter = 16, categoria, classname = "" }) {
  // if (categoria)
  let productListed = productos.filter((prod) => prod.tipo === categoria);
  productListed = productListed.slice(0, counter);
  return (
    <div>
      {categoria ? (
        <span className="text flex justify-start px-32 pt-16 text-4xl font-light uppercase">
          {categoria}
        </span>
      ) : null}

      <main className={`flex justify-center px-16 pt-4 md:px-32 ${classname}`}>
        <div className="grid grid-cols-6 gap-2">
          {productListed.map((item) => {
            return (
              <article key={item.id} className="group bg-gray-50">
                <Link
                  to={`/joya/${item.id}`}
                  className="relative w-full flex-grow rounded-sm pb-16"
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
    </div>
  );
}
