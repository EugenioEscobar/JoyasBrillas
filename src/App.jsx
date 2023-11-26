import styles from "./style"

import { logotipo } from "./assets"

function App() {

  return (
    <div className="overflow-hidden bg-primary flex justify-center">
      <nav className={`${styles.boxWidth} flex justify-between items-center`}>
        <img src={logotipo} alt="Joyas Brillas" className="w-[300px]" />
        <div className="md:flex-row px-6">
          <a href="#" className="px-3">Productos</a>
          <a href="#" className="px-3">Productos</a>
          <a href="#" className="px-3">Productos</a>

        </div>
      </nav>
    </div>
  )
}

export default App
