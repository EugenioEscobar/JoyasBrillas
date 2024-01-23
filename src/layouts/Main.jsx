import { getTiposProducto } from "../constants/tipoProducto";
import {
  Advertisement,
  Navbar,
  Banner,
  Categories,
  TopProducts,
  Footer,
  ProductList,
} from "../components";

export function Main() {
  const categorias = getTiposProducto();
  console.log(categorias);

  return (
    <div className="scroll-smooth bg-cararra-50 font-josefin">
      <Advertisement span="Envianos tu reserva y obtén un 10% de descuento"></Advertisement>

      <Navbar></Navbar>

      <Banner linkCatalogo="#productos"></Banner>

      <section id="productos">
        <header className="flex justify-center">
          <h2 className="relative mb-6 mt-12 font-ebGaramond text-4xl font-medium italic sm:text-5xl md:text-7xl">
            Productos Destacados
            <span className="absolute -right-28 -top-4 rotate-6 rounded-2xl bg-gradient-to-r from-corn-500 to-corn-400 p-1 px-3 text-base text-black md:text-xl">
              Descuentos de Apertura
            </span>
          </h2>
        </header>
        <ProductList counter={6}></ProductList>
        {categorias.map((categoria) => {
          return (
            <ProductList
              counter={6}
              key={categoria}
              categoria={categoria}
            ></ProductList>
          );
        })}
      </section>
      {/* Ventajas competitivas */}

      <Footer></Footer>

      {/* 
      
      - Sección de Ofertas o Promociones
      - Sobre Nosotros (opcional)
      - Testimonios o Reseñas de Clientes
      - Blog o Consejos de Joyería (opcional)
      - Suscripción al Boletín Informativo 
      
      */}
    </div>
  );
}
