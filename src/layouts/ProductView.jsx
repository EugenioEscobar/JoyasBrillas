import { Navbar, Footer, Breadcrumb } from "../components";

export function ProductView() {
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
                  src="https://static.sammit.cl/2017/aro-circon-onix-6x6-mm-74914e-500.jpg"
                  alt="Aro de plata mujer"
                />
                <img
                  src="https://static.sammit.cl/26355/aro-pareja-con-circones-389024-500.jpg"
                  alt="Aro de plata mujer"
                />
                <img
                  src="https://static.sammit.cl/40674/argolla-corazon-32-mm-963ac5-500.jpg"
                  alt="Aro de plata mujer"
                />
              </section>
              <img
                src="https://static.sammit.cl/2017/aro-circon-onix-6x6-mm-74914e-500.jpg"
                alt="Aro de plata mujer"
                className="col-span-5 px-2"
              />
            </div>
          </div>
          <div className="w-1/2">
            <section id="info" className="mt-8 flex flex-col pl-10">
              <span className="text-3xl font-normal">
                Aro Circón Ónix 6x6 mm
              </span>
              <span className="mt-2 text-xs font-extralight tracking-wider">
                CODIGO: JN16-090
              </span>
              <p className="mt-4 flex flex-col items-end font-light">
                Precio normal
                <span className="text-xl font-normal">$6.000</span>
              </p>
              <p className="mt-4 flex flex-col items-end font-light leading-3 text-corn-600">
                Precio oferta
                <span className="text-3xl font-normal">$6.000</span>
              </p>
              <span className="mt-2 text-sm font-light tracking-wider">
                Descripción: Joya de Plata Fina Ley 925
              </span>
              <p className="mt-2 text-sm font-light tracking-wider">
                Categoría: <span className="font-medium">Apegado Circón</span>
              </p>
              <hr />
            </section>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
