import { neckless } from "../assets";
import { Link } from "react-router-dom";
import productos from "../constants/products.json";
import { LinkToProductos } from "./LinkToProducts";

export function ProductList({ counter = 16, categoria, classname = "" }) {
  let productListed = categoria
    ? productos.filter((prod) => prod.tipo === categoria)
    : productos;
  productListed = productListed.slice(0, counter);

  return (
    <div>
      {categoria ? (
        <span className="text flex justify-start px-32 pt-16 text-4xl font-light uppercase">
          {categoria}
        </span>
      ) : null}

      <main className={`flex justify-center px-16 pt-4 md:px-32 ${classname}`}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4  lg:grid-cols-6">
          {productListed.map((item) => {
            return (
              <article key={item.id} className="bg-gray-50 p-1">
                <Link
                  to={`/joya/${item.id}`}
                  className="group relative w-full flex-grow rounded-sm pb-16"
                >
                  <img
                    src={item.imagen == "null" ? neckless : item.imagen}
                    alt={item.Nombre}
                    className="aspect-square w-full object-center"
                  />
                  <div className="absolute top-0 -z-10 aspect-square w-full bg-white opacity-30 group-hover:z-10"></div>
                  <div className="flex flex-col p-2 text-left">
                    <span className="font-medium ">{item.nombre}</span>
                    <span className="font-light">{item.descripcion}</span>
                    <span className="mt-4 flex justify-start gap-2">
                      <p className="text-xl italic text-primary line-through">{`$${
                        item.total * 2
                      }`}</p>
                      <p className="text-xl font-bold italic">{`$${item.total}`}</p>
                    </span>
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
