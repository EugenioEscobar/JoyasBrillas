import { logotipo } from "../assets";

export function Footer() {
  return (
    <div className="mt-8 flex justify-center">
      <div className="container  border-t-2 border-t-secondary">
        <div className="flex items-center justify-between p-12">
          <a href="#" className="flex flex-1 justify-start">
            <img src={logotipo} alt="Joyas Brillas" className="w-[30%]" />
          </a>
          <span className="flex-1 text-center">
            ©2023 Joyas Brillas, Todos lo derechos reservados
          </span>
          <ul className="flex flex-1 justify-end gap-6">
            <li>In</li>
            <li>What</li>
            <li>Teléfono</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
