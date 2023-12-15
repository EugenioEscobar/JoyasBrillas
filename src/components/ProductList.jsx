const getProducts = () => {
  const products = [
    { Id: 1, Nombre: "Item 1", Desc: "Descripción 1", Valor: 1000 },
    { Id: 2, Nombre: "Item 2", Desc: "Descripción 2", Valor: 2000 },
    { Id: 3, Nombre: "Item 3", Desc: "Descripción 3", Valor: 3000 },
    { Id: 4, Nombre: "Item 4", Desc: "Descripción 4", Valor: 4000 },
    { Id: 5, Nombre: "Item 5", Desc: "Descripción 5", Valor: 5000 },
    { Id: 6, Nombre: "Item 6", Desc: "Descripción 6", Valor: 6000 },
    { Id: 7, Nombre: "Item 7", Desc: "Descripción 7", Valor: 7000 },
    { Id: 8, Nombre: "Item 8", Desc: "Descripción 8", Valor: 8000 },
  ];
  console.log(products);
  return products;
};

export function ProductList() {
  return (
    <>
      <header className="flex justify-center">
        <span className="mt-12 font-ebGaramond text-7xl font-medium italic text-secondary ">
          Productos
        </span>
      </header>
      <section className="flex">
        {/* <ul>
          <li>asdS</li>
          {getProducts().forEach((item) => {
            console.log(item);
            return <li>{item}</li>;
          })}
        </ul> */}
      </section>
    </>
  );
}
