import {
  Advertisement,
  Navbar,
  Banner,
  Categories,
  TopProducts,
  Footer,
} from "../components";

export function Main() {
  return (
    <>
      <Advertisement span="Envianos tu reserva y obtén un 10% de descuento"></Advertisement>

      <Navbar></Navbar>

      <Banner></Banner>

      <Categories></Categories>

      <TopProducts></TopProducts>

      <Footer></Footer>

      {/* 
      
      - Sección de Ofertas o Promociones
      - Sobre Nosotros (opcional)
      - Testimonios o Reseñas de Clientes
      - Blog o Consejos de Joyería (opcional)
      - Suscripción al Boletín Informativo 
      
      */}
    </>
  );
}
