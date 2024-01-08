import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function LinkToProductos(categoria) {
  const nombreCategoria = categoria
    ? `Más ${categoria.categoria}`
    : "Productos";
  return (
    <div className="mt-5 flex justify-end px-44">
      <Link
        to="/joyas"
        className="group relative flex items-center gap-1 text-xl italic text-corn-600 underline underline-offset-4 hover:opacity-80"
      >
        <span className="relative transition-all duration-300 group-hover:-translate-x-4 ">
          {`Ver ${nombreCategoria}`}
        </span>
        <FontAwesomeIcon
          icon={faChevronRight}
          beatFade={true}
          className="fa-md absolute -right-[200%] hidden opacity-0 transition-all duration-200 ease-in-out group-hover:right-0 group-hover:flex group-hover:opacity-100 group-hover:duration-500"
        />
      </Link>
    </div>
  );
}
