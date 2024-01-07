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
    <div className="scroll-smooth font-josefin">
      <Advertisement span="Envianos tu reserva y obtén un 10% de descuento"></Advertisement>

      <Navbar></Navbar>

      <Banner></Banner>

      <header className="flex justify-center">
        <h2 className="mb-6 mt-12 font-ebGaramond text-7xl font-medium italic text-corn-600 ">
          Descuentos de Apertura
        </h2>
      </header>
      {categorias.map((categoria) => {
        return (
          <ProductList
            counter={6}
            key={categoria}
            categoria={categoria}
          ></ProductList>
        );
      })}

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
