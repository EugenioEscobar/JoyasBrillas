import { useParams } from "react-router-dom";
import { neckless } from "../assets";
import { ProductList } from "../components";
import { Navbar, Footer, Breadcrumb } from "../components";
import productos from "../constants/products.json";

export function ProductView() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para otros navegadores

  const { productId } = useParams();

  const productIdNumber = parseInt(productId, 10);
  const selectedProduct = productos.find(
    (producto) => producto.id === productIdNumber,
  );
  const handleImageHover = (newImage) => {
    const imagenProducto = document.getElementById("productImage");
    imagenProducto.src = newImage;
  };

  return (
    <>
      <Navbar></Navbar>
      <Breadcrumb></Breadcrumb>
      <section className="mt-12 flex justify-center">
        <div className="flex w-[1180px] ">
          <div className="w-1/2">
            <div className="grid grid-cols-6">
              <section className="flex flex-col gap-4 px-2">
                <img
                  src={
                    selectedProduct.imagen == "null"
                      ? neckless
                      : selectedProduct.imagen
                  }
                  alt="Aro de plata mujer"
                  onMouseOver={() => handleImageHover(selectedProduct.imagen)}
                />
                {/* <img
                  src="https://static.sammit.cl/26355/aro-pareja-con-circones-389024-500.jpg"
                  alt="Aro de plata mujer"
                  onMouseOver={() =>
                    handleImageHover(
                      "https://static.sammit.cl/26355/aro-pareja-con-circones-389024-500.jpg",
                    )
                  }
                />
                <img
                  src="https://static.sammit.cl/40674/argolla-corazon-32-mm-963ac5-500.jpg"
                  alt="Aro de plata mujer"
                  onMouseOver={() =>
                    handleImageHover(
                      "https://static.sammit.cl/40674/argolla-corazon-32-mm-963ac5-500.jpg",
                    )
                  }
                /> */}
              </section>
              <div className="col-span-5 overflow-hidden px-2">
                <img
                  id="productImage"
                  src={
                    selectedProduct.imagen == "null"
                      ? neckless
                      : selectedProduct.imagen
                  }
                  alt="Aro de plata mujer"
                  className="hover:scale-125"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <section id="info" className="mt-8 flex flex-col pl-10">
              <span className="text-3xl font-normal">
                {selectedProduct.nombre}
              </span>
              <span className="mt-2 text-xs font-extralight tracking-wider">
                CODIGO: JYB-0{selectedProduct.id}
              </span>
              <p className="mt-4 flex flex-col items-end font-light">
                Precio normal
                <span className="text-xl font-normal">
                  ${selectedProduct.precio * 2}
                </span>
              </p>
              <p className="mt-4 flex flex-col items-end font-light leading-3 text-corn-600">
                Precio oferta
                <span className="text-3xl font-normal">
                  ${selectedProduct.precio}
                </span>
              </p>
              <span className="mt-2 text-sm font-light tracking-wider">
                Descripción: {selectedProduct.descripcion}
              </span>
              <p className="mt-2 text-sm font-light tracking-wider">
                Categoría:{" "}
                <span className="font-medium">{selectedProduct.tipo}</span>
              </p>
              <hr />
            </section>
          </div>
        </div>
      </section>
      <ProductList
        categoria={`${selectedProduct.tipo}`}
        counter={6}
      ></ProductList>
      <Footer></Footer>
    </>
  );
}
