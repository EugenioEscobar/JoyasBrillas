import productos from "./products.json";

const getTiposProducto = () => {
  const tipos = productos.map((producto) => producto.tipo);
  const tipoUnico = [...new Set(tipos)];
  return tipoUnico;
};

export { getTiposProducto };
